import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Solutions } from './pages/Solutions';
import { ChallengeArena } from './pages/ChallengeArena';
import { SkillPassport } from './pages/SkillPassport';
import { Recruiters } from './pages/Recruiters';
import { About } from './pages/About';
import { Resources } from './pages/Resources';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import { GetStarted } from './pages/GetStarted';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'products', Component: Products },
      { path: 'solutions', Component: Solutions },
      { path: 'challenge-arena', Component: ChallengeArena },
      { path: 'skill-passport', Component: SkillPassport },
      { path: 'recruiters', Component: Recruiters },
      { path: 'about', Component: About },
      { path: 'resources', Component: Resources },
      { path: 'pricing', Component: Pricing },
      { path: 'contact', Component: Contact },
      { path: 'get-started', Component: GetStarted },
      { path: '*', Component: NotFound },
    ],
  },
]);
