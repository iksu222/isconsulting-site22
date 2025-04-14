import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [page, setPage] = useState("main");

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="sticky top-0 bg-white shadow z-10 p-4 flex justify-between">
        <div className="text-xl font-bold">IS컨설팅</div>
        <div className="space-x-4">
          <Button variant="ghost" onClick={() => setPage("main")}>홈</Button>
          <Button variant="ghost" onClick={() => setPage("about")}>회사소개</Button>
          <Button variant="ghost" onClick={() => setPage("review")}>상담후기</Button>
          <Button variant="ghost" onClick={() => setPage("apply")}>상담신청</Button>
          <Button variant="ghost" onClick={() => setPage("contact")}>연락처</Button>
        </div>
      </nav>

      {page === "main" && (
        <div className="text-center p-8">
          <img src="https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?auto=format&fit=crop&w=1470&q=80" alt="배너" className="mx-auto rounded-2xl shadow mb-6" />
          <h1 className="text-3xl font-bold mb-4">신뢰를 바탕으로 한 대출 컨설팅</h1>
          <p>신용/담보 대출 전문 IS컨설팅</p>
        </div>
      )}

      {page === "about" && (
        <div className="p-8 space-y-4">
          <h2 className="text-2xl font-bold">회사소개</h2>
          <p>IS컨설팅은 신용/담보 대출에 특화된 전문 컨설팅 회사입니다.</p>
          <p>정익수 대표가 직접 상담을 진행하며, 수많은 성공 사례를 바탕으로 최적의 대출 솔루션을 제공합니다.</p>
        </div>
      )}

      {page === "review" && (
        <div className="p-8 space-y-4">
          <h2 className="text-2xl font-bold">상담후기</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <p className="mb-2">"빠르게 승인받고 큰 도움 받았어요!"</p>
                <span className="text-sm text-gray-500">김** 고객</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="mb-2">"담보 없이도 상담 잘 해주셔서 감사해요."</p>
                <span className="text-sm text-gray-500">이** 고객</span>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {page === "apply" && (
        <div className="p-8 space-y-4">
          <h2 className="text-2xl font-bold">상담신청</h2>
          <form className="space-y-4 max-w-md mx-auto">
            <input type="text" placeholder="이름" className="w-full border p-2 rounded" />
            <input type="tel" placeholder="연락처" className="w-full border p-2 rounded" />
            <select className="w-full border p-2 rounded">
              <option>대출 종류 선택</option>
              <option>신용대출</option>
              <option>담보대출</option>
            </select>
            <textarea placeholder="상세 내용" className="w-full border p-2 rounded" rows={4}></textarea>
            <Button type="submit">빠른 상담 요청하기</Button>
          </form>
        </div>
      )}

      {page === "contact" && (
        <div className="p-8 space-y-4">
          <h2 className="text-2xl font-bold">연락처</h2>
          <p>📞 010-7619-XXXX</p>
          <p>📧 iksu222@naver.com</p>
          <p>📍 서울시 어디구 어디동</p>
          <Button>카카오톡 상담하기</Button>
        </div>
      )}
    </div>
  );
}
