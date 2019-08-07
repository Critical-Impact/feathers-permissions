// Type definitions for feathers-permissions 0.2.1
// Definitions by: Blair Williams <https://nexvia.com.au>

/*~ This is the module plugin template file. You should rename it to index.d.ts
 *~ and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */

/*~ Here, declare the same module as the one you imported above */

export = checkPermissions;

declare function checkPermissions(options: FeathersPermissions.CheckPermissionsOptions): any;

declare namespace FeathersPermissions {
  export interface CheckPermissionsOptions
  {
    roles?: string[];
    entity?: string;
    field?: string;
    error?: boolean;
  }
}
