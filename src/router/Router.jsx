import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { NotFound } from '../components/NotFound';
import { Home } from '../pages/UserSide/Home';
import { PopularArtists } from '../pages/UserSide/PopularArtists';
import { Admin } from '../pages/Dashboard/index';
import { PopularArtistsIndex } from '../pages/Dashboard/AdminPopularArtists';
import { UserSide } from '../layout/UserSide';
import { Dashboard } from '../layout/Dashboard';

export const Router = () => {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />

      {/* --------------client side route-------------- */}
      <Route
        element={
          <UserSide>
            <Outlet />
          </UserSide>
        }
      >
        <Route path='/'>
          <Route index={true} element={<Home />} />
          <Route
            index={false}
            path='popular-artist'
            element={<PopularArtists />}
          />
        </Route>
      </Route>
      {/* --------------client side route-------------- */}

      {/* --------------admin route-------------- */}
      <Route
        element={
          <Dashboard>
            <Outlet />
          </Dashboard>
        }
      >
        <Route path='/admin'>
          <Route index={true} element={<Admin />} />
          <Route
            index={false}
            path='popular-artist'
            element={<PopularArtistsIndex />}
          />
        </Route>
      </Route>
      {/* --------------admin route-------------- */}
    </Routes>
  );
};
