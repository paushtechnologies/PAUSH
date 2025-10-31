import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
} from "@mui/material";
import { COMPANY_NAME } from "../data/constants";

export default function Footer() {
  // Smooth scroll handler
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  // Local state for newsletter subscription
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const handleSubscribe = () => {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validEmail.test(email)) {
      setMessage("❌ Please enter a valid email address.");
      setSuccess(false);
      return;
    }
    setMessage("🎉 Subscribed successfully!");
    setSuccess(true);
    setEmail("");
    setTimeout(() => setMessage(""), 4000); // hide message after 4 seconds
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
        color: "white",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          {/* Company Description */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              sx={{
                mb: 2,
                fontWeight: 700,
                display: "inline-block",
                position: "relative",
                background: "linear-gradient(45deg, #6366f1, #ec4899)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                  animation: "shine 4s ease-in-out infinite",
                },
                "@keyframes shine": {
                  "0%": { left: "-100%" },
                  "100%": { left: "100%" },
                },
              }}
            >
              {COMPANY_NAME}
            </Typography>

            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
              Pioneering the future of technology with AI, blockchain, and cloud
              solutions. We transform businesses through innovative digital
              ecosystems that drive unprecedented growth.
            </Typography>

            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              📞 +91 8076864264 | ✉️ paushtechnologies@gmail.com
            </Typography>
          </Grid>

          {/* Navigation */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              🚀 Innovation Hub
            </Typography>
            <List sx={{ p: 0 }}>
              {[
                { label: "Home", id: "#home" },
                { label: "Services", id: "#services" },
                { label: "Pricing", id: "#pricing" },
                { label: "Contact Us", id: "#contact" },
              ].map((link, index) => (
                <ListItem
                  key={index}
                  sx={{
                    p: 0,
                    mb: 1,
                    opacity: 0.8,
                    cursor: "pointer",
                    "&:hover": { opacity: 1 },
                  }}
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.label}
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Resources */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              🔗 Resources
            </Typography>
            <List sx={{ p: 0 }}>
              {[
                "Privacy Policy",
                "Terms of Service",
                "Innovation Blog",
                "Case Studies",
              ].map((item, i) => (
                <ListItem
                  key={i}
                  sx={{
                    p: 0,
                    mb: 1,
                    opacity: 0.8,
                    cursor: "pointer",
                    "&:hover": { opacity: 1 },
                  }}
                >
                  {item}
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              📧 Stay Updated
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
              Get the latest insights on AI, blockchain, and emerging
              technologies.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                placeholder="Enter your email"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  flex: 1,
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": { borderColor: "rgba(255, 255, 255, 0.3)" },
                    "&:hover fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.5)",
                    },
                    "&.Mui-focused fieldset": { borderColor: "#6366f1" },
                  },
                }}
              />
              <Button
                variant="contained"
                onClick={handleSubscribe}
                sx={{
                  background: "linear-gradient(45deg, #6366f1, #ec4899)",
                  minWidth: "auto",
                  px: 2,
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 5px 15px rgba(99, 102, 241, 0.3)",
                  },
                }}
              >
                🚀
              </Button>
            </Box>

            {message && (
              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  color: success ? "#22c55e" : "#f87171",
                  transition: "opacity 0.5s ease",
                }}
              >
                {message}
              </Typography>
            )}
          </Grid>
        </Grid>

        {/* Footer bottom */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            mt: 4,
            pt: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © 2024 {COMPANY_NAME}. All Rights Reserved. | Crafting Tomorrow's
            Technology Today
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
