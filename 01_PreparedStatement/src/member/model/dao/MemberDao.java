package member.model.dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import member.model.vo.Member;

/**
 * DAO
 * Data Access Object
 * DB에 접근하는 클래스
 * DB에 접근하는 것은 DAO 안에서만 일어나게 해야한다.
 *
 *1. 드라이버클래스 등록(최초1회)
 *2. Connection객체 생성(접속하고자하는 DB서버의 url,user,password)
 *3. 자동커밋여부 설정 : true(자동커밋, 기본값)/false -> app에서 직접 트랜젝션제어
 *4. PreparedStatement객체생성(미완성쿼리(값대입이 아직 안된 상태)) 및 값대입
 *5. Statement 객체 실행. DB에 쿼리 요청
 *6. 응답처리 DML:int 리턴, DQL: ResultSet리턴 ->자바객체로 전환
 *7. 트랜잭션처리(DML)
 *8. 자원반납(생성의 역순)
 *
 */
public class MemberDao {
   
   //접근할 수 있도록 필드로 빼고
   String driverClass = "oracle.jdbc.OracleDriver";
   String url = "jdbc:oracle:thin:@localhost:1521:xe";
   //: 빼먹지 말것. => 총 5개                  ip:포트:db이름
   String user = "student"; //user 대소문자 구분X
   String password = "student"; //password 대소문자 구분

   public int insertMember(Member member) {
      //접근할 수 있도록 지역변수로 끌어올림
      Connection conn = null;
      String sql = "insert into member values(?,?,?,?,?,?,?,?,?,default)";
      PreparedStatement pstmt = null;
      int result =0;
      
      try {
         //1. 드라이버클래스 등록(최초1회) 이런 패키지에 이런 클래스가 있어요.
         Class.forName(driverClass); //예외처리 강제화
         //2. Connection객체 생성(접속하고자하는 DB서버의 url,user,password)
         conn = DriverManager.getConnection(url, user, password); //SQLException최상위 예외 클래스 발생
         
         //3. 자동커밋여부 설정(DML) : true(자동커밋, 기본값)/false -> app에서 직접 트랜젝션제어
         conn.setAutoCommit(false);
         //4. PreparedStatement객체생성(미완성쿼리(값대입이 아직 안된 상태)) 및 값대입
         pstmt = conn.prepareStatement(sql); //쿼리를 실행하는 객체
         pstmt.setString(1, member.getMemberId()); //첫번째 ?는 id이다
         pstmt.setString(2, member.getPassword());
         pstmt.setString(3, member.getMemberName());
         pstmt.setString(4, member.getGender());
         pstmt.setInt(5, member.getAge());
         pstmt.setString(6, member.getEmail());
         pstmt.setString(7, member.getPhone());
         pstmt.setString(8, member.getAddress());
         pstmt.setString(9, member.getHobby());
         
         //5. Statement 객체 실행. DB에 쿼리 요청
         //6. 응답처리 DML:int 리턴, DQL: ResultSet리턴 ->자바객체로 전환
         result = pstmt.executeUpdate(); //DML -> executeUpdate(Delete 이런거 없다.Update만 존재) |  DQL -> executeQuery
         
         //7. 트랜잭션처리(DML)
         if(result > 0)
            conn.commit();
         else
            conn.rollback();
      } catch (ClassNotFoundException | SQLException e) {
         //ojdbc6.jar 프로젝트 연동실패!
         e.printStackTrace();
      } finally {
         //8. 자원반납(생성의 역순)
         try {
            if(pstmt != null)
               pstmt.close();
         } catch (SQLException e) {
            e.printStackTrace();
         }
         
         try {
            if(conn != null)
               conn.close();
         } catch (SQLException e) {
            e.printStackTrace();
         }
      }
      return result;
   }

   public List<Member> selectAll() {
      Connection conn = null;
      PreparedStatement pstmt = null; //finally절에서 접근하기 위해 위에 선언해줌
      ResultSet rset = null;
      String sql = "select * from member order by enroll_date desc";
      List <Member> list = null;
      
      try {
         //1. 드라이버클래스 등록(최초1회)
         Class.forName(driverClass);
         //2. Connection객체 생성(접속하고자하는 DB서버의 url,user,password)
         //3. 자동커밋여부 설정 : true(자동커밋, 기본값)/false -> app에서 직접 트랜젝션제어
         conn = DriverManager.getConnection(url,user, password);
         //4. PreparedStatement객체생성(미완성쿼리(값대입이 아직 안된 상태)) 및 값대입
         pstmt = conn.prepareStatement(sql);
         //5. Statement 객체 실행. DB에 쿼리 요청
         rset = pstmt.executeQuery();
         //6. 응답처리 DML:int 리턴, DQL: ResultSet리턴 ->자바객체로 전환
         //다음행 존재여부리턴 //한행한행의 정보에 접근할 수 있다(다음행이 없을 때까지)
         list = new ArrayList<>();
         while(rset.next()) {
            //컬럼명은 대소문자를 구분하지 않는다.
            String memberId = rset.getString("member_id");
            String password = rset.getString("password");
            String memberName = rset.getString("member_name");
            String gender = rset.getString("gender");
            int age = rset.getInt("age");
            String email = rset.getString("email");
            String phone = rset.getString("phone");
            String address = rset.getString("address");
            String hobby= rset.getString("hobby");
            Date enrollDate = rset.getDate("enroll_date");
            
            //멤버객체를 생성해서 리스트에 차곡차곡 쌓아줌 가입된 역순으로,,
            Member member = new Member(memberId, password, memberName, gender, age, email, phone, address, hobby, enrollDate);
            list.add(member);
         }
         //7. 트랜잭션처리(DML) DQL일때는 트랜젝션 처리 안해도 왼다.
         
         
      } catch (ClassNotFoundException | SQLException e) {
         // TODO Auto-generated catch block
         e.printStackTrace();
      } finally {
         //8. 자원반납(생성의 역순)
         try {
            if(rset != null)
               rset.close();
         } catch (SQLException e) {
            e.printStackTrace();
         }
         try {
            if(pstmt != null)
               pstmt.close();
         } catch (SQLException e) {
            e.printStackTrace();
         }
         try {
            if(conn != null)
               conn.close();
         } catch (SQLException e) {
            e.printStackTrace();
         }
         
      }
      
      return list;
   }
   
   public Member selectOne(String memberId) {
      Connection conn = null;
      PreparedStatement pstmt = null; //finally절에서 접근하기 위해 위에 선언해줌
      ResultSet rset = null;
      String sql = "select * from member where member_id = ?";
      Member member = null;
      
      try {
         //1. 드라이버클래스 등록(최초1회)
         Class.forName(driverClass);
         //2. Connection객체 생성(접속하고자하는 DB서버의 url,user,password)
         //3. 자동커밋여부 설정 : true(자동커밋, 기본값)/false -> app에서 직접 트랜젝션제어
         conn = DriverManager.getConnection(url,user, password);
         //4. PreparedStatement객체생성(미완성쿼리(값대입이 아직 안된 상태)) 및 값대입
         pstmt = conn.prepareStatement(sql); //select * from member where member_id = 'honggd'
         pstmt.setString(1, memberId);//
         //5. Statement 객체 실행. DB에 쿼리 요청
         rset = pstmt.executeQuery(); //0행이어도 rset이 반환된다.
         //6. 응답처리 DML:int 리턴, DQL: ResultSet리턴 ->자바객체로 전환
         //다음행 존재여부리턴 //한행한행의 정보에 접근할 수 있다(다음행이 없을 때까지)
         while(rset.next()) {
            //컬럼명은 대소문자를 구분하지 않는다.
            memberId = rset.getString("member_id");
            String password = rset.getString("password");
            String memberName = rset.getString("member_name");
            String gender = rset.getString("gender");
            int age = rset.getInt("age");
            String email = rset.getString("email");
            String phone = rset.getString("phone");
            String address = rset.getString("address");
            String hobby= rset.getString("hobby");
            Date enrollDate = rset.getDate("enroll_date");
            
            //멤버객체를 생성해서 리스트에 차곡차곡 쌓아줌 가입된 역순으로,,
            member = new Member(memberId, password, memberName, gender, age, email, phone, address, hobby, enrollDate);
         }
         //7. 트랜잭션처리(DML) DQL일때는 트랜젝션 처리 안해도 왼다.
         
         
      } catch (ClassNotFoundException | SQLException e) {
         // TODO Auto-generated catch block
         e.printStackTrace();
      } finally {
         //8. 자원반납(생성의 역순)
         try {
            if(rset != null)
               rset.close();
         } catch (SQLException e) {
            e.printStackTrace();
         }
         try {
            if(pstmt != null)
               pstmt.close();
         } catch (SQLException e) {
            e.printStackTrace();
         }
         try {
            if(conn != null)
               conn.close();
         } catch (SQLException e) {
            e.printStackTrace();
         }
         
      }
      
      return member;
   }

}