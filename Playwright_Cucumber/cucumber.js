module.exports = {
   default: {
     formatOptions: {
       snippetInterface: "async-await"
     },
     dryRun: false,
     paths: ["src/test/features/useraccount.feature"],
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
   }
};