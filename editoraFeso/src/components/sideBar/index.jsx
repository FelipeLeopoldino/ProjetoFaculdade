import {
   CDBSidebar,
   CDBSidebarContent,
   CDBSidebarHeader,
   CDBSidebarMenu,
   CDBSidebarMenuItem,
   CDBSidebarFooter
} from 'cdbreact'

export default function SideBar() {
   return (
      <CDBSidebar>
         <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
            Unifeso
         </CDBSidebarHeader>
         <CDBSidebarContent>
            <CDBSidebarMenu>
               <CDBSidebarMenuItem icon="th-large">
                  Home
               </CDBSidebarMenuItem>
               <CDBSidebarMenuItem icon="sticky-note">
                  Adicionar
               </CDBSidebarMenuItem>
               <CDBSidebarMenuItem icon="table" iconType="solid">
                  Minhas publicações
               </CDBSidebarMenuItem>
            </CDBSidebarMenu>
         </CDBSidebarContent>

         <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
               className="sidebar-btn-wrapper"
               style={{ padding: '20px 5px' }}
            >Editora Unifeso
            </div>
         </CDBSidebarFooter>
      </CDBSidebar>
   )
}
