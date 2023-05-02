import os from "os";
import { Application } from "express";
import Log from "../middlewares/Log";
import router from "../routes/article";

/**
 * @class Routes
 * @description This class is used to initialize the routes
 */
class Routes {
  
  /**
   * @method mount
   * @description This function is used to initialize the routes
   * @param {Application} app - Express application
   * @returns Application of type express
   */
  public mount(_app: Application): Application {
    Log.info('Initializing routes');
    
    _app.use('/api', router);
    return _app;
  }
}

export default new Routes;