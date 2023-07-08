#! /usr/bin/env node

import * as cli from '@darkobits/saffron';
// @ts-ignore
import { reticulateSpline } from 'lib/reticulate-spline';

cli.command({
  // <> here indicates a required positional argument, while [] indicates an
  // optional positional argument.
  command: '* <spline>',
  builder: ({ command }) => {
    // Add some additional information about the "spline" positional argument.
    command.positional('spline', {
      description: 'Identifier of the spline to reticulate.',
      type: 'string'
    });

    // Define the "algorithm" named argument.
    command.option('algorithm', {
      description: 'Reticulation algorithm to use.',
      type: 'string',
      required: false,
      choices: ['RTA-20', 'RTA-21', 'RTA-22'],
      default: 'RTA-21'
    });
  },
  handler: ({ argv }) => {
    // This is where we would normally call the function that implements spline
    // reticulation, but for now let's just log the configuration we got from
    // Saffron.
    console.log(argv);

    // When we are confident the CLI is working as intended, we can hand-off
    // control to our business logic.
    // reticulateSpline();
  }
});

// Once we have registered all commands for our application, be sure to call
// init.
cli.init();
