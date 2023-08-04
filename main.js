const execSync = require("child_process").execSync;

module.exports.templateTags = [
    {
        name: "pyScript",
        displayName: "Python Script",
        description: "Run python3 script.",
        args: [
            {
                displayName: "File path",
                placeholder: '~/file.py',
                type: "string",
            },
        ],
        async run(context, path) {
            try {
                var resp = execSync( `python3 ${path}`, { encoding: "utf-8" });
            } catch (failed) {
                console.log("Command execution failed with " + failed);
                return failed.stderr;
            }

            return resp.trim();
        },
    },
];
