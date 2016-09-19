import 'stylesheets/application';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import { openImageModal, requireAuth } from 'helpers/routes';

import Application from 'components/application';
import Main from 'components/main';
import ImageLayout from 'components/image_layout';
import ImageModal from 'components/image_modal';

render((
  <Router history={ browserHistory }>
    <Route component={ Application }>
      <Route path="/" component={ Main }/>
      <Route
        path="images"
        component={ ImageLayout }
        onEnter={ requireAuth }
      >
        <Route
          path=":imageId"
          component={ ImageModal }
          onEnter={ openImageModal }
        />
      </Route>

      <Redirect from="*" to="/"/>
    </Route>
  </Router>
), document.getElementById('app'));
