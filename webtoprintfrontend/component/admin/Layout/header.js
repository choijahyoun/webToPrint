
  import useSelection from 'antd/lib/table/hooks/useSelection';
import dynamic from 'next/dynamic'
import Link from 'next/link';
  import React, { useState } from 'react';
  
const EuiCollapsibleNav = dynamic(() => import('@elastic/eui/').then(module => module.EuiCollapsibleNav),{ssr:false})
const EuiCollapsibleNavGroup = dynamic(() => import('@elastic/eui/').then(module => module.EuiCollapsibleNavGroup),{ssr:false})
const EuiHeaderSectionItemButton = dynamic(() => import('@elastic/eui/').then(module => module.EuiHeaderSectionItemButton),{ssr:false})
const EuiHeaderLogo = dynamic(() => import('@elastic/eui/').then(module => module.EuiHeaderLogo),{ssr:false})
const EuiHeader = dynamic(() => import('@elastic/eui/').then(module => module.EuiHeader),{ssr:false})
const EuiPinnableListGroup = dynamic(() => import('@elastic/eui/').then(module => module.EuiPinnableListGroup),{ssr:false})
const EuiListGroupItem = dynamic(() => import('@elastic/eui/').then(module => module.EuiListGroupItem),{ssr:false})
const EuiPinnableListGroupItemProps = dynamic(() => import('@elastic/eui/').then(module => module.EuiPinnableListGroupItemProps),{ssr:false})
const EuiIcon = dynamic(() => import('@elastic/eui/').then(module => module.EuiIcon),{ssr:false}) 
const EuiFlexItem = dynamic(() => import('@elastic/eui/').then(module => module.EuiFlexItem),{ssr:false}) 
const AdminHeader = () =>
{
    const [navIsOpen, setNavIsOpen] = useState();
    const [headerPosition , setHeaderPosition] = useState('static');

    const collapsibleNav = (
        <EuiCollapsibleNav
            aria-label="main-navigation"
            isOpen={navIsOpen}
            button={
                <EuiHeaderSectionItemButton
                  aria-label="Toggle main navigation"
                  onClick={() => setNavIsOpen(!navIsOpen)}>
                  <EuiIcon type='menu' size="m" aria-hidden="true" />
                </EuiHeaderSectionItemButton>
              }
            onClose={() => setNavIsOpen(false)}>
            <EuiFlexItem grow={false} style={{ flexShrink: 0 }}>
                <Link href="/admin/dashboard">
                    <EuiCollapsibleNavGroup
                        title="대시보드"
                        isCollapsible={true}
                        initalIsOpen={true}
                        >
                    </EuiCollapsibleNavGroup>
                </Link>
            </EuiFlexItem>
            <EuiFlexItem grow={false} style={{ flexShrink: 0 }}>
                <EuiCollapsibleNavGroup
                    title="상품관리"
                    isCollapsible={true}
                    initalIsOpen={true}
                    >
                    <Link href="/admin/productManage">
                        <EuiListGroupItem label="상품관리"/>
                    </Link>
                    <Link href="/admin/adminCategory">
                        <EuiListGroupItem label="상품분류"/>
                    </Link>
                    <Link href="/admin/adminProduct">
                        <EuiListGroupItem label="상품등록"/>
                    </Link>
                </EuiCollapsibleNavGroup>
            </EuiFlexItem>
            <EuiFlexItem grow={false} style={{ flexShrink: 0 }}>
                <Link href="/admin/adminUser">
                    <EuiCollapsibleNavGroup
                        title="회원관리"
                        isCollapsible={true}
                        initalIsOpen={true}
                        >
                    </EuiCollapsibleNavGroup>
                </Link>
            </EuiFlexItem>
            <EuiFlexItem grow={false} style={{ flexShrink: 0 }}>
            <Link href="/admin/adminOrder">
                <EuiCollapsibleNavGroup
                    title="주문관리"
                    isCollapsible={true}
                    initalIsOpen={true}
                    >
                </EuiCollapsibleNavGroup>
              </Link>
            </EuiFlexItem>
            <EuiFlexItem grow={false} style={{ flexShrink: 0,}}>
            <Link href="/admin/adminMeterial">
                <EuiCollapsibleNavGroup 
                    title="자재관리" 
                    isCollapsible={true}
                    initalIsOpen={true}
                    >
                </EuiCollapsibleNavGroup>
              </Link>
            </EuiFlexItem>
        </EuiCollapsibleNav>
    ) 
    const leftSectionItems = [
        collapsibleNav,
        <EuiHeaderLogo iconType="logoElastic">Pworks</EuiHeaderLogo>,
        ];

    return (
        <div>
            <EuiHeader
            position={headerPosition}
            sections={
                        [
                            {
                                items: leftSectionItems,
                                borders: "right",
                            }
                        ]
                    }
            />
        </div>
    );
}
export default AdminHeader;