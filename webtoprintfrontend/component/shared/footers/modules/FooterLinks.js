import React from 'react';
import Link from 'next/link';

const FooterLinks = () => (
    <div className="ps-footer__links">
        <div className="notice">
            <Link href="'/">
                <a>
                    회사소개
                </a>
            </Link>
            <span> | </span>
            <Link href="'/">
                <a>
                    이용약관
                </a>
            </Link>
            <span> | </span>
            <Link href="'/">
                <a>
                    오시는길
                </a>
            </Link>
            <span> | </span>
            <Link href="'/">
                <a>
                    개인정보 취급 방침
                </a>
            </Link>
            <span> | </span>
            <Link href="'/">
                <a>
                    이메일 무단수집거부
                </a>
            </Link>
            <span> | </span>
            <Link href="'/">
                <a>
                    청소년 보호정책
                </a>
            </Link>
            <span> | </span>
            <Link href='/admin/adminLogin'>
                <a>
                    관리자 모드
                </a>
            </Link>
        </div>
    </div>
);

export default FooterLinks;
