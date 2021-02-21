package member.controller;

import java.util.List;

import member.model.dao.MemberDao;
import member.model.vo.Member;

/**
 * 
 * MVC패턴의 시작점이자 전체흐름을 제어. 
 * 
 * view단으로부터 요청을 받아서 dao에 다시 요청.
 * 그 결과를 view단에 다시 전달.
 */

public class MemberController {
   private MemberDao memberDao = new MemberDao();

   public int insertMember(Member member) {
      return memberDao.insertMember(member);
   }

   public List<Member> selectAll() {
      return memberDao.selectAll();
   }
   public Member selectOne(String memberId) {
      return memberDao.selectOne(memberId);
   }
}
