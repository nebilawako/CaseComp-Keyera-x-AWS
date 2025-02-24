
// import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
// import Image from "next/image"

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar"

// // Menu items.
// const items = [
//   {
//     title: "Dashboard",
//     url: "#",
//     icon: Home,
//   },
//   {
//     title: "Inbox",
//     url: "#",
//     icon: Inbox,
//   },
//   {
//     title: "Calendar",
//     url: "#",
//     icon: Calendar,
//   },
//   {
//     title: "Search",
//     url: "#",
//     icon: Search,
//   },
//   {
//     title: "Settings",
//     url: "#",
//     icon: Settings,
//   },
// ]

// export function AppSidebar() {
//   return (
//     <Sidebar>
//       <SidebarContent>
//         <div className="sidebar-logo-container" style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "70px", // adjust based on logo size
//           marginTop: "20px", // space between logo and other content
//         }}>
//           <Image src="/logo.png" alt="Keyera Logo" width={80} height={80} /> {/* adjust width/height if necessary */}
//         </div>

//         <SidebarGroup>
//           <SidebarGroupLabel style={{ marginBottom: '10px' }}></SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {items.map((item) => (
//                 <SidebarMenuItem key={item.title}>
//                   <SidebarMenuButton asChild>
//                     <a href={item.url} style={{
//                       display: "flex",
//                       alignItems: "center",
//                       fontSize: "18px", // Increase the font size here
                  
//                       padding: "20px", // Optional: add padding for better spacing
//                     }}>
//                       <item.icon size={24} style={{ marginRight: "10px" }} /> {/* Adjust icon size */}
//                       <span>{item.title}</span>
//                     </a>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//     </Sidebar>
//   )
// }

import { Calendar, Home, Inbox, Search, Settings, Map } from "lucide-react"
import Image from "next/image"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Geospatial Map",
    url: "#",
    icon: Map,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
 
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  // Extract the last item (Settings) separately
  const settingsItem = items[items.length - 1];

  return (
    <Sidebar>
      <SidebarContent
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh", // Ensures full height of the sidebar
        }}
      >
        {/* Logo section */}
        <div
          className="sidebar-logo-container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100px", // Adjust based on logo size
            marginTop: "20px", // Space between logo and other content
          }}
        >
          <Image src="/logo.png" alt="Keyera Logo" width={80} height={80} />
        </div>

        {/* Main menu items */}
        <div style={{ flex: 1 }}>
          <SidebarGroup>
            <SidebarGroupLabel></SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.slice(0, -1).map((item) => ( // Exclude Settings item
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontSize: "18px", // Font size
                          padding: "20px", // Padding for spacing
                        }}
                      >
                        <item.icon size={24} style={{ marginRight: "10px" }} />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        {/* Settings item at the bottom */}
        <div style={{ marginTop: "auto" }}> {/* Push the settings to the bottom */}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem key="Settings">
                  <SidebarMenuButton asChild>
                    <a
                      href={settingsItem.url}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "18px", // Font size for Settings
            
                        padding: "20px", // Padding for spacing
                      }}
                    >
                      <settingsItem.icon size={24} style={{ marginRight: "10px" }} />
                      <span>{settingsItem.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}
