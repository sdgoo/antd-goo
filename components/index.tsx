/* @remove-on-es-build-begin */
// this file is not used if use https://github.com/ant-design/babel-plugin-import
const ENV = process.env.NODE_ENV;
if (
  ENV !== 'production' &&
  ENV !== 'test' &&
  typeof console !== 'undefined' &&
  console.warn &&
  typeof window !== 'undefined'
) {
  console.warn(
    'You are using a whole package of antd, ' +
      'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
  );
}
/* @remove-on-es-build-end */

// export { default as Button } from './button';
//
// export { default as ConfigProvider } from './config-provider';
//
// export { default as Empty } from './empty';
//
// export { default as Icon } from './icon';
//
// export { default as LocaleProvider } from './locale-provider';
//
// export { default as Modal } from './modal';
//
// export { default as Tooltip } from './tooltip';
//
// export { default as version } from './version';
