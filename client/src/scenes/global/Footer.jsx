import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            ECOMMER FOR BBAE
          </Typography>
          <div>
            Unleash the vibes of summer with our latest collection for men and women. 
            Dive into a sea of trendy fashion that embraces the sun-soaked spirit.
            Stay in the loop with the latest trends, exclusive offers, and style tips. 
            Follow us on social media and subscribe to our newsletter for a daily dose of fashion inspiration.
            Need assistance? Our dedicated support team is here to help. 
            Contact us via email at support@gmail.com or call us at (111)222-3333.



          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            123 Main Street, San Jose, CA 95123, USA
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: support@gmail.com
          </Typography>
          <Typography mb="30px">(111)222-3333</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;