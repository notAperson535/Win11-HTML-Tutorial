import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Run it online',
    Svg: require('@site/static/img/windows 11 logo.svg').default,
    description: (
      <>
        You can run a recreation of Windows 11 online.
      </>
    ),
  },
  {
    title: 'Start Menu',
    Svg: require('@site/static/img/startmenu.svg').default,
    description: (
      <>
        Create a start menu.
      </>
    ),
  },
  {
    title: 'Taskbar',
    Svg: require('@site/static/img/taskbar.svg').default,
    description: (
      <>
        Create a taskbar.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
