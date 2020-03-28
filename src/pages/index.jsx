import React from 'react';
import routes from '../config/web/routes';

const Index = () => {
  return (
    <div>
      <h1>
        Hi!{' '}
        <span aria-label="wave" role="img">
          👋
        </span>{' '}
        <br /> I'm Diana.
      </h1>
      <p>
        Dolore est in aute non irure in elit et dolor ad in enim exercitation. Voluptate elit
        voluptate amet Lorem laboris do veniam esse est. Ea labore minim consectetur aliquip
        excepteur laborum voluptate adipisicing cillum quis ea mollit magna. Consectetur aliqua
        velit incididunt ex qui est minim duis anim esse est proident. Nisi magna eiusmod cillum
        velit qui ut eu elit ipsum do exercitation. Sunt voluptate ut qui amet nisi aute do sit ea.
        Quis amet nisi dolor cupidatat labore voluptate minim sit ut nisi.
      </p>
      <ul>
        {routes.map(r => (
          <li>{r.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Index;
