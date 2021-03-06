declare module '@capacitor/core' {
  interface PluginRegistry {
    AppLauncher: AppLauncherPlugin;
  }
}

export interface AppLauncherPlugin {
  /**
   * Check if an app can be opened with the given URL.
   *
   * On iOS  you must declare the URL schemes you pass to this method by adding
   * the LSApplicationQueriesSchemes key to your app's Info.plist file.
   * This method always returns false for undeclared schemes, whether or not an appropriate
   * app is installed. To learn more about the key, see
   * [LSApplicationQueriesSchemes](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/plist/info/LSApplicationQueriesSchemes).
   *
   * @since 1.0.0
   */
  canOpenUrl(options: { url: string }): Promise<{ value: boolean }>;

  /**
   * Open an app with the given URL.
   *
   * @since 1.0.0
   */
  openUrl(options: { url: string }): Promise<{ completed: boolean }>;
}
