module.exports = {
   default: {
     formatOptions: {
       snippetInterface: "async-await"
     },
     dryRun: false,
     paths: ["src/test/features/*.feature"],
     require: [
       "src/test/steps/*.ts",
       "src/hooks/*.ts"
     ],
     format: [
       "progress-bar",
       "html:reports/cucumber-report.html",
       "json:test-results/cucumber-report.json"
     ],
     requireModule: ["ts-node/register"],
parallel:2
   },
   rerun: {
        formatOptions: {
            snippetInterface: "async-await"
        },
       paths: [
            "@rerun.txt"
        ],
        dryRun: false,
        require: [
            "src/test/steps/*.ts",
            "src/hooks/hooks.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "progress-bar",
            "html:test-results/rerun_report.html",
            "json:test-results/cucumber-report.json",
            "rerun:@rerun.txt"
        ]
       
    }
};

  
    
