import type { ThemeConfig } from "antd";

export const solarTheme: ThemeConfig = {
  token: {
    // Modern primary gradient colors - Solar Fusion
    colorPrimary: "#667eea", // Modern blue-purple gradient start
    colorPrimaryHover: "#764ba2", // Gradient end
    colorPrimaryActive: "#5a67d8", // Active state

    // Advanced gradient system (custom CSS class will be needed)
    // Will create gradient buttons via custom styles

    // Text colors - Enhanced hierarchy
    colorText: "#1a202c", // Deep charcoal
    colorTextSecondary: "#4a5568", // Medium gray
    colorTextTertiary: "#718096", // Light gray
    colorTextQuaternary: "#a0aec0", // Subtle text

    // Background colors - Layered approach
    colorBgContainer: "#ffffff",
    colorBgElevated: "#f7fafc", // Very subtle off-white
    colorBgLayout: "#edf2f7", // Soft background
    colorBgSpotlight: "#e2e8f0", // Highlight areas

    // Border colors - Refined
    colorBorder: "#e2e8f0",
    colorBorderSecondary: "#cbd5e0",
    // colorBorderTertiary: "#a0aec0",

    // Semantic colors - Modern palette
    colorSuccess: "#48bb78", // Vibrant green
    colorSuccessBg: "#c6f6d5", // Light success background
    colorWarning: "#ed8936", // Warm orange
    colorWarningBg: "#fed7d7", // Light warning background
    colorError: "#f56565", // Soft red
    colorErrorBg: "#fed7d7", // Light error background
    colorInfo: "#4299e1", // Bright blue
    colorInfoBg: "#bee3f8", // Light info background

    // Accent colors
    colorLink: "#5a67d8",
    colorLinkHover: "#4c51bf",

    // Font settings - Modern typography scale
    fontFamily:
      '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: 15,
    fontSizeHeading1: 48,
    fontSizeHeading2: 36,
    fontSizeHeading3: 30,
    fontSizeHeading4: 24,
    fontSizeHeading5: 20,
    fontSizeSM: 13,
    fontSizeLG: 17,

    // Font weights
    fontWeightStrong: 600,

    // Border radius - Modern, consistent scale
    borderRadius: 12,
    borderRadiusLG: 16,
    borderRadiusSM: 8,
    borderRadiusXS: 4,

    // Spacing - 8px grid system
    padding: 16,
    paddingLG: 24,
    paddingSM: 12,
    paddingXS: 8,
    paddingXXS: 4,
    margin: 16,
    marginLG: 24,
    marginSM: 12,
    marginXS: 8,
    marginXXS: 4,

    // Line heights
    lineHeight: 1.6,
    lineHeightLG: 1.8,
    lineHeightSM: 1.4,

    // Box shadow - Modern depth system
    boxShadow: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    boxShadowSecondary: `
      0 4px 6px -1px rgba(0, 0, 0, 0.05),
      0 2px 4px -1px rgba(0, 0, 0, 0.03)
    `,
    boxShadowTertiary: `
      0 10px 15px -3px rgba(0, 0, 0, 0.07),
      0 4px 6px -2px rgba(0, 0, 0, 0.04)
    `,

    // Animation
    motionDurationFast: "0.15s",
    motionDurationMid: "0.2s",
    motionDurationSlow: "0.3s",
    motionEaseInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    motionEaseOut: "cubic-bezier(0, 0, 0.2, 1)",
    // motionEaseIn: "cubic-bezier(0.4, 0, 1, 1)",

    // Control
    controlHeight: 40,
    controlHeightLG: 48,
    controlHeightSM: 32,
  },
  components: {
    Button: {
      colorPrimary: "#667eea",
      colorPrimaryHover: "#764ba2",
      colorPrimaryActive: "#5a67d8",
      borderRadius: 10,
      borderRadiusLG: 12,
      borderRadiusSM: 8,
      fontWeight: 500,
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
      paddingInline: 20,
      paddingInlineLG: 24,
      paddingInlineSM: 16,
      boxShadow: "none",
      boxShadowSecondary: "0 4px 12px rgba(102, 126, 234, 0.2)",
      borderColorDisabled: "#e2e8f0",
    },
    Card: {
      borderRadius: 20,
      borderRadiusLG: 24,
      borderRadiusSM: 16,
      boxShadow: `
        0 2px 8px rgba(0, 0, 0, 0.03),
        0 1px 4px rgba(0, 0, 0, 0.02)
      `,
      boxShadowSecondary: `
        0 8px 24px rgba(0, 0, 0, 0.06),
        0 4px 12px rgba(0, 0, 0, 0.03)
      `,
      boxShadowTertiary: `
        0 12px 32px rgba(0, 0, 0, 0.08),
        0 8px 20px rgba(0, 0, 0, 0.04)
      `,
      padding: 24,
      paddingLG: 32,
      paddingSM: 16,
    },
    Input: {
      borderRadius: 10,
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
      hoverBorderColor: "#667eea",
      activeBorderColor: "#764ba2",
      paddingInline: 12,
      paddingInlineLG: 16,
      paddingInlineSM: 10,
      colorBgContainer: "#ffffff",
    },
    Select: {
      borderRadius: 10,
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
    },
    Modal: {
      borderRadius: 24,
      borderRadiusLG: 28,
      paddingContentHorizontal: 32,
      paddingContentVertical: 24,
      boxShadow: `
        0 20px 40px rgba(0, 0, 0, 0.1),
        0 10px 20px rgba(0, 0, 0, 0.06)
      `,
    },
    Drawer: {
      borderRadius: 24,
      borderRadiusLG: 28,
      padding: 24,
      paddingLG: 32,
    },
    Notification: {
      borderRadius: 16,
      padding: 16,
      paddingLG: 20,
      boxShadow: `
        0 8px 24px rgba(0, 0, 0, 0.08),
        0 4px 12px rgba(0, 0, 0, 0.04)
      `,
    },
    Menu: {
      borderRadius: 12,
      borderRadiusLG: 16,
      itemBorderRadius: 8,
      itemHoverBg: "rgba(102, 126, 234, 0.08)",
      itemActiveBg: "rgba(102, 126, 234, 0.12)",
      itemSelectedBg: "rgba(102, 126, 234, 0.1)",
      itemSelectedColor: "#667eea",
    },
    Table: {
      borderRadius: 12,
      headerBg: "#f7fafc",
      headerColor: "#4a5568",
      rowHoverBg: "rgba(237, 242, 247, 0.6)",
      padding: 16,
      paddingLG: 20,
      paddingSM: 12,
    },
    Tabs: {
      borderRadius: 12,
      itemActiveColor: "#667eea",
      itemHoverColor: "#764ba2",
      itemSelectedColor: "#667eea",
      inkBarColor: "#667eea",
    },
    Alert: {
      borderRadius: 12,
    },
    Badge: {
      fontSize: 12,
      fontSizeSM: 10,
    },
  },
};

export const solarDarkTheme: ThemeConfig = {
  token: {
    // Dark theme - Modern, elegant
    colorPrimary: "#818cf8", // Softer indigo for dark mode
    colorPrimaryHover: "#a5b4fc",
    colorPrimaryActive: "#6366f1",

    // Text colors - Dark mode optimized
    colorText: "#f7fafc",
    colorTextSecondary: "#cbd5e0",
    colorTextTertiary: "#a0aec0",
    colorTextQuaternary: "#718096",

    // Background colors - Layered dark
    colorBgContainer: "#2d3748",
    colorBgElevated: "#4a5568",
    colorBgLayout: "#1a202c",
    colorBgSpotlight: "#2d3748",

    // Border colors
    colorBorder: "#4a5568",
    colorBorderSecondary: "#718096",
    // colorBorderTertiary: "#a0aec0",

    // Semantic colors - Dark mode variants
    colorSuccess: "#68d391",
    colorSuccessBg: "#22543d",
    colorWarning: "#f6ad55",
    colorWarningBg: "#744210",
    colorError: "#fc8181",
    colorErrorBg: "#742a2a",
    colorInfo: "#63b3ed",
    colorInfoBg: "#2c5282",

    // Accent colors
    colorLink: "#818cf8",
    colorLinkHover: "#a5b4fc",

    // Font settings
    fontFamily:
      '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: 15,
    fontSizeHeading1: 48,
    fontSizeHeading2: 36,
    fontSizeHeading3: 30,
    fontSizeHeading4: 24,
    fontSizeHeading5: 20,
    fontSizeSM: 13,
    fontSizeLG: 17,
    fontWeightStrong: 600,

    // Border radius
    borderRadius: 12,
    borderRadiusLG: 16,
    borderRadiusSM: 8,
    borderRadiusXS: 4,

    // Spacing
    padding: 16,
    paddingLG: 24,
    paddingSM: 12,
    paddingXS: 8,
    paddingXXS: 4,
    margin: 16,
    marginLG: 24,
    marginSM: 12,
    marginXS: 8,
    marginXXS: 4,

    // Line heights
    lineHeight: 1.6,
    lineHeightLG: 1.8,
    lineHeightSM: 1.4,

    // Box shadow - Dark mode (softer, more transparent)
    boxShadow: `
      0 1px 2px 0 rgba(0, 0, 0, 0.1),
      0 1px 6px -1px rgba(0, 0, 0, 0.08),
      0 2px 4px 0 rgba(0, 0, 0, 0.08)
    `,
    boxShadowSecondary: `
      0 4px 6px -1px rgba(0, 0, 0, 0.15),
      0 2px 4px -1px rgba(0, 0, 0, 0.1)
    `,
    boxShadowTertiary: `
      0 10px 15px -3px rgba(0, 0, 0, 0.2),
      0 4px 6px -2px rgba(0, 0, 0, 0.15)
    `,

    // Animation
    motionDurationFast: "0.15s",
    motionDurationMid: "0.2s",
    motionDurationSlow: "0.3s",
    motionEaseInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    motionEaseOut: "cubic-bezier(0, 0, 0.2, 1)",
    // motionEaseIn: "cubic-bezier(0.4, 0, 1, 1)",

    // Control
    controlHeight: 40,
    controlHeightLG: 48,
    controlHeightSM: 32,
  },
  components: {
    Button: {
      colorPrimary: "#818cf8",
      colorPrimaryHover: "#a5b4fc",
      colorPrimaryActive: "#6366f1",
      borderRadius: 10,
      borderRadiusLG: 12,
      borderRadiusSM: 8,
      fontWeight: 500,
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
      paddingInline: 20,
      paddingInlineLG: 24,
      paddingInlineSM: 16,
      boxShadow: "none",
      boxShadowSecondary: "0 4px 12px rgba(129, 140, 248, 0.3)",
    },
    Card: {
      borderRadius: 20,
      borderRadiusLG: 24,
      borderRadiusSM: 16,
      boxShadow: `
        0 2px 8px rgba(0, 0, 0, 0.15),
        0 1px 4px rgba(0, 0, 0, 0.1)
      `,
      boxShadowSecondary: `
        0 8px 24px rgba(0, 0, 0, 0.2),
        0 4px 12px rgba(0, 0, 0, 0.15)
      `,
      boxShadowTertiary: `
        0 12px 32px rgba(0, 0, 0, 0.25),
        0 8px 20px rgba(0, 0, 0, 0.2)
      `,
      padding: 24,
      paddingLG: 32,
      paddingSM: 16,
    },
    Input: {
      borderRadius: 10,
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
      hoverBorderColor: "#818cf8",
      activeBorderColor: "#a5b4fc",
      paddingInline: 12,
      paddingInlineLG: 16,
      paddingInlineSM: 10,
      colorBgContainer: "#2d3748",
      colorTextPlaceholder: "#a0aec0",
    },
    Select: {
      borderRadius: 10,
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
      colorBgContainer: "#2d3748",
    },
    Modal: {
      borderRadius: 24,
      borderRadiusLG: 28,
      paddingContentHorizontal: 32,
      paddingContentVertical: 24,
      boxShadow: `
        0 20px 40px rgba(0, 0, 0, 0.25),
        0 10px 20px rgba(0, 0, 0, 0.2)
      `,
    },
    Drawer: {
      borderRadius: 24,
      borderRadiusLG: 28,
      padding: 24,
      paddingLG: 32,
    },
    Notification: {
      borderRadius: 16,
      padding: 16,
      paddingLG: 20,
      boxShadow: `
        0 8px 24px rgba(0, 0, 0, 0.2),
        0 4px 12px rgba(0, 0, 0, 0.15)
      `,
    },
    Menu: {
      borderRadius: 12,
      borderRadiusLG: 16,
      itemBorderRadius: 8,
      itemHoverBg: "rgba(129, 140, 248, 0.15)",
      itemActiveBg: "rgba(129, 140, 248, 0.25)",
      itemSelectedBg: "rgba(129, 140, 248, 0.2)",
      itemSelectedColor: "#a5b4fc",
    },
    Table: {
      borderRadius: 12,
      headerBg: "#4a5568",
      headerColor: "#e2e8f0",
      rowHoverBg: "rgba(74, 85, 104, 0.4)",
      padding: 16,
      paddingLG: 20,
      paddingSM: 12,
    },
    Tabs: {
      borderRadius: 12,
      itemActiveColor: "#818cf8",
      itemHoverColor: "#a5b4fc",
      itemSelectedColor: "#818cf8",
      inkBarColor: "#818cf8",
    },
    Alert: {
      borderRadius: 12,
    },
    Badge: {
      fontSize: 12,
      fontSizeSM: 10,
    },
  },
};

// CSS for gradient buttons (add this to your global CSS)
export const globalStyles = `
  .gradient-button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .gradient-button:hover {
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }
  
  .gradient-button:active {
    transform: translateY(0);
  }
  
  /* Modern card hover effects */
  .modern-card {
    transition: all 0.3s ease;
  }
  
  .modern-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  }
  
  /* Smooth theme transitions */
  * {
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }
`;
