import DashIcon from "../images/dashboardicon.svg";
import wallet from "../images/wallet.svg";
import transfer from "../images/transfericon.svg";
import chatRoom from "../images/savingsicon.svg";
import data from "../images/dadaicon.svg";
import teams from "../images/teams.svg";
import task from "../images/cable.svg";
import myTask from "../images/electricity.svg";
import profile from "../images/profile.svg";


 const SideBarLink = [
 
  {
    icon:teams,
    title:"Team ",
    path:"/data_bundle"
   },
   {
    icon:task,
    title:"All Tasks",
    path:"/tasks"
   },
   {
    icon:myTask,
    title:"My Tasks",
    path:"/my-tasks"
   },
   {
    icon:chatRoom,
    title:"Chat Room ",
    path:"/chat-room"
   },
   {
    icon: profile,
    title:"Profile ",
    path:"/profile"
   }
];

export default SideBarLink;