#!/usr/bin/env node

/* eslint strict:0, camelcase:0 */

'use strict';

require('antd-goo-tools/lib/updateComponents')(name => !!name.match(/^rc-/));
