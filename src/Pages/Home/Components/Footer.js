// import {
//   Laptop,
//   DesktopWindowsSharp,
//   LaptopSharp,
//   HeadsetOutlined,
// } from "@mui/icons-material";

// import { Grid, Paper } from "@mui/material";
// import { grey } from "@mui/material/colors";

// const Footer = () => {
//   const IconArray = [
//     {
//       icon: <Laptop fontSize="large" sx={{ alignSelf: "center" }} />,
//       name: "Laptop",
//     },
//     {
//       icon: (
//         <DesktopWindowsSharp fontSize="large" sx={{ alignSelf: "center" }} />
//       ),
//       name: "Desktops",
//     },
//     {
//       icon: <LaptopSharp fontSize="large" sx={{ alignSelf: "center" }} />,
//       name: "Vostro",
//     },
//     {
//       icon: <HeadsetOutlined fontSize="large" sx={{ alignSelf: "center" }} />,
//       name: "Accessories",
//     },
//   ];
//   return (
//     <Grid
//       sx={{ flexGrow: 1, bgcolor: grey[100], bottom: 0, position: "fixed" }}
//       container
//       spacing={2}
//     >
//       <Grid item xs={12}>
//         <Grid container justifyContent="center" alignItems="center" spacing={2}>
//           {IconArray.map((value, index) => (
//             <Grid
//               key={index}
//               sx={{
//                 margin: "auto",
//                 height: "8em",
//                 marginTop: 3,
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//             >
//               {value.icon}
//               <h3 style={{ color: "black" }}>{value.name}</h3>
//             </Grid>
//           ))}
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// export default Footer;
