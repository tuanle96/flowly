import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.flowly.app',
  appName: 'Flowly',
  webDir: 'frontend/dist',
  server: {
    androidScheme: 'https',
    iosScheme: 'https',
    hostname: 'flowly.app'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: "#4F46E5",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#ffffff",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
    StatusBar: {
      style: 'LIGHT',
      backgroundColor: '#4F46E5',
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
    Camera: {
      permissions: {
        camera: "Camera access is required for taking photos and scanning QR codes",
        photos: "Photo library access is required for selecting images"
      }
    },
    Filesystem: {
      permissions: {
        publicStorage: "Storage access is required for file operations and downloads"
      }
    },
    Geolocation: {
      permissions: {
        location: "Location access is required for location-based features and analytics"
      }
    },
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#4F46E5",
      sound: "beep.wav",
    },
    Keyboard: {
      resize: "body",
      style: "dark",
      resizeOnFullScreen: true,
    },
    Device: {
      permissions: {
        device: "Device information is required for analytics and support"
      }
    },
    Network: {
      permissions: {
        network: "Network access is required for real-time communication"
      }
    },
    Haptics: {
      permissions: {
        vibrate: "Haptic feedback enhances user experience"
      }
    }
  },
  ios: {
    scheme: 'Flowly',
    contentInset: 'automatic',
    scrollEnabled: true,
    backgroundColor: '#4F46E5'
  },
  android: {
    buildOptions: {
      keystorePath: 'android/keystore.jks',
      keystoreAlias: 'flowly',
      keystorePassword: process.env.ANDROID_KEYSTORE_PASSWORD,
      keystoreAliasPassword: process.env.ANDROID_KEY_PASSWORD,
    },
    backgroundColor: '#4F46E5',
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: true
  }
};

export default config;
