import Link from "next/link";

const MypageNavigation = () =>
{
    
    return (
        <div>
            <h2>마이페이지</h2>
            <div className="titleLineMy">
                <ul className="mytab">
                    <li className="borL">
                    <Link href="/mypage/mypage">
                            <a>
                                <em>마이페이지</em>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/mypage/personalInfo">
                            <a>
                                <em>개인정보</em>
                            </a>
                        </Link>
                    </li>
                    <li>
                    <Link href="/mypage/orders">
                            <a>
                                <em>주문/배송조회</em>
                            </a>
                        </Link>
                    </li>
                    <li>
                    <Link href="/mypage/tradeInfo">
                            <a>
                                <em>거래내역</em>
                            </a>
                        </Link>
                    </li>
                    <li>
                    <Link href="/mypage/shoppingCart">
                            <a>
                                <em>장바구니 내역</em>
                            </a>
                        </Link>
                    </li>
                    <li>
                    <Link href="/mypage/estimate">
                            <a>
                                <em>견적서 관리</em>
                            </a>
                        </Link>
                    </li>
                    <li className="borL">
                    <Link href="/">
                            <a>
                                <em>교정확인</em>
                            </a>
                        </Link>
                    </li>
                    <li>
                    <Link href="/mypage/shipping">
                            <a>
                                <em>배송지 관리</em>
                            </a>
                        </Link>
                    </li>
                    <li>
                    <Link href="/mypage/taxinvolice">
                            <a>
                                <em>세금계산서 관리</em>
                            </a>
                        </Link>
                    </li>
                    <li>
                    <Link href="/">
                            <a>
                                <em>현금영수증 관리</em>
                            </a>
                        </Link>
                    </li>
                    <li>
                    <Link href="/mypage/notice">
                            <a>
                                <em>공지사항</em>
                            </a>
                        </Link>
                    </li>
                    <li>
                    <Link href="/mypage/manageFileUpload">
                            <a>
                                <em>파일업로드</em>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default MypageNavigation;