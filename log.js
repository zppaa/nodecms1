var log4js = require('log4js');  
log4js.configure({  
    appenders: [  
        { type: 'console' }, {  
            type: 'dateFile',  
            filename: 'logs/log',  
            pattern: "_yyyy-MM-dd",  
            maxLogSize: 1024,  
            alwaysIncludePattern: false,  
            backups: 4,  
            category: 'logger'  
        }  
    ],  
    replaceConsole: true  
});  
  
var logger = log4js.getLogger('logger');  

  
exports.use = function(app) {  
    //页面请求日志,用auto的话,默认级别是WARN  
    //app.use(log4js.connectLogger(dateFileLog, {level:'auto', format:':method :url'}));  
    app.use(log4js.connectLogger(logger, {level:'debug', format:':method :url'}));  
}  