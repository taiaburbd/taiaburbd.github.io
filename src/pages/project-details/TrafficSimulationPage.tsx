import React from 'react';
import { Building2, Target, Lightbulb, ImageIcon, Github, ExternalLink } from 'lucide-react';
import Seo from '../../components/Seo';
import JsonLd from '../../components/JsonLd';
import {
  ProjectBackLink,
  ProjectHero,
  ProjectSection,
  ProjectFigure,
  ProjectSidebar,
  MetaCard,
  MetaRow,
  TechTag,
} from '../../components/ProjectLayout';
import { ROUTES, SITE, absUrl } from '../../lib/seo';

const tasks = [
  {
    title: 'Traffic light cycles',
    body: 'Red, yellow and green phases with countdown timers at a four-way intersection.',
  },
  {
    title: 'Pedestrian signals',
    body: 'Walk / don’t-walk lights synchronised with vehicle phases so crossings stay consistent.',
  },
  {
    title: 'Vehicle violations',
    body: 'Detects crossing the stop line on red, or failing to stop when yellow starts.',
  },
  {
    title: 'Pedestrian violations',
    body: 'Flags pedestrians who enter the crossing on a don’t-walk signal.',
  },
  {
    title: 'Live alerts',
    body: 'On-screen message plus a beep when a violation is detected.',
  },
];

const TrafficSimulationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Seo
        title={ROUTES.trafficSimulation.title}
        description={ROUTES.trafficSimulation.description}
        path={ROUTES.trafficSimulation.path}
        type="article"
        keywords={[
          'Traffic Simulation',
          'Computer Vision',
          'Software Engineering',
          'Pygame',
          'Simulation',
        ]}
      />
      <JsonLd
        id="traffic-simulation"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Academic Projects', path: ROUTES.academicProjects.path },
          { name: 'Traffic Simulation', path: ROUTES.trafficSimulation.path },
        ]}
        extra={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: ROUTES.trafficSimulation.title,
          description: ROUTES.trafficSimulation.description,
          url: absUrl(ROUTES.trafficSimulation.path),
          author: { '@id': `${SITE.url}/#person` },
          keywords: 'Traffic Simulation, Computer Vision, Modelling, Simulation, Pygame',
        }}
      />

      <ProjectBackLink />
      <ProjectHero
        tags={['Computer Vision', 'Simulation', 'Software Engineering']}
        title="Traffic signal simulation and violation alert"
        subtitle="Intersection simulator with timed lights, pedestrian crossings, and live detection of red-light and crossing violations."
        actions={
          <a
            href="https://github.com/taiaburbd/traffic-ss"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md border border-white/15 bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
        }
      />

      <div className="page-wrap py-7">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-3">
            <ProjectSection
              title="Institution"
              icon={<Building2 className="h-4 w-4 text-indigo-600" />}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-50 border border-slate-200 rounded-lg p-1.5 flex items-center justify-center">
                  <img
                    src="/logos/ub-logo.png"
                    alt="University of Burgundy"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">University of Burgundy</p>
                  <p className="text-xs text-slate-500">Le Creusot, France</p>
                  <p className="text-xs text-slate-500 mt-1">
                    Software Engineering course · MAIA programme
                  </p>
                </div>
              </div>
            </ProjectSection>

            <ProjectSection
              title="Objective"
              icon={<Target className="h-4 w-4 text-indigo-600" />}
            >
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                Simulate a realistic traffic intersection and flag unsafe behaviour in real time —
                vehicles running red or yellow, pedestrians crossing on don’t-walk.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed bg-indigo-50/70 border border-indigo-100 rounded-lg px-3 py-2.5">
                <span className="font-semibold text-slate-800">Focus — </span>
                couple light timing, agent motion and simple geometric rules so violations are
                visible and audible as they happen.
              </p>
            </ProjectSection>

            <ProjectSection
              title="Features"
              icon={<Lightbulb className="h-4 w-4 text-indigo-600" />}
            >
              <ol className="space-y-2.5">
                {tasks.map((task, i) => (
                  <li key={task.title} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-md bg-indigo-50 text-indigo-600 text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{task.title}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{task.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="grid sm:grid-cols-3 gap-2 mt-4">
                <div className="rounded-lg border border-red-100 bg-red-50 px-3 py-2.5">
                  <p className="text-xs font-bold text-red-700 mb-0.5">Red</p>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    Stop behind the line until green.
                  </p>
                </div>
                <div className="rounded-lg border border-amber-100 bg-amber-50 px-3 py-2.5">
                  <p className="text-xs font-bold text-amber-700 mb-0.5">Yellow</p>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    Stop unless already past the line.
                  </p>
                </div>
                <div className="rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2.5">
                  <p className="text-xs font-bold text-emerald-700 mb-0.5">Green</p>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    Go if the intersection is clear.
                  </p>
                </div>
              </div>
            </ProjectSection>

            <ProjectSection
              title="Demo"
              icon={<ImageIcon className="h-4 w-4 text-indigo-600" />}
            >
              <div className="space-y-3">
                <ProjectFigure
                  src="/images/project_traffic-signal-simulation.png"
                  alt="Traffic simulation interface"
                  caption="Intersection view with lights, vehicles and pedestrians"
                />
              </div>
            </ProjectSection>
          </div>

          <ProjectSidebar>
            <MetaCard title="Project">
              <MetaRow label="Status">Completed</MetaRow>
              <MetaRow label="Year">2022</MetaRow>
              <MetaRow label="Course">Software Engineering</MetaRow>
              <MetaRow label="Program">MAIA</MetaRow>
            </MetaCard>
            <MetaCard title="Stack">
              <div className="flex flex-wrap gap-1.5">
                {['Python', 'Pygame', 'Simulation', 'Real-time detection'].map((t) => (
                  <TechTag key={t}>{t}</TechTag>
                ))}
              </div>
            </MetaCard>
            <MetaCard title="People">
              <div className="flex flex-col gap-2">
                <a
                  href="https://github.com/taiaburbd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-700 hover:text-indigo-600"
                >
                  <Github className="h-3.5 w-3.5" />
                  Taiabur Rahman
                </a>
                <a
                  href="https://github.com/thitiphatarm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-700 hover:text-indigo-600"
                >
                  <Github className="h-3.5 w-3.5" />
                  Thitiphat ARM
                </a>
              </div>
            </MetaCard>
            <MetaCard title="Links">
              <div className="flex flex-col gap-2">
                <a
                  href="https://github.com/taiaburbd/traffic-ss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-800"
                >
                  <Github className="h-3.5 w-3.5" />
                  Repository
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="https://towardsdatascience.com/traffic-intersection-simulation-using-pygame-689d6bd7687a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-800"
                >
                  Reference article
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </MetaCard>
          </ProjectSidebar>
        </div>
      </div>
    </div>
  );
};

export default TrafficSimulationPage;
