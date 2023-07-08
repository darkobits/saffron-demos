import fs from 'fs/promises';
import { EOL } from 'os';
import path from 'path';

import { withDefaultPackageScripts } from '@darkobits/ts';
import boxen from 'boxen';

// This file defines various package scripts used to build the project. For a
// complete list, run "nr --scripts" from the command line.
export default withDefaultPackageScripts(({ script, task }) => {
  script('postPrepare', task(async () => {
    const binPath = path.resolve('./dist/bin/cli.js');
    const symlinkPath = path.resolve('./node_modules/.bin/spline-reticulator');

    try {
      await fs.unlink(symlinkPath);
    } catch {
      // Symlink does not exist yet.
    }

    await fs.symlink(binPath, symlinkPath);

    console.log(boxen([
      'Project is ready! Run "npm run build:watch" in a separate',
      'terminal to continuously rebuild as you make changes.'
    ].join(EOL), { padding: 1 }));
  }), {
    group: 'Other',
    description: 'Symlinks our executable script so that it may be run directly from the command line.'
  });
});
