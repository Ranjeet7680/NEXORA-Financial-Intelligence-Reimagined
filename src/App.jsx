import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Loading Screen
import LoadingScreen from './components/LoadingScreen';

// Modals
import DemoRequestModal from './components/DemoRequestModal';
import ProjectDetailModal from './components/ProjectDetailModal';
import JobApplyModal from './components/JobApplyModal';
import ArticleModal from './components/ArticleModal';

// Pages
import HomePage from './pages/HomePage';
import PlatformPage from './pages/PlatformPage';
import CopilotPage from './pages/CopilotPage';
import AnalyticsPage from './pages/AnalyticsPage';
import RiskPage from './pages/RiskPage';
import ForecastingPage from './pages/ForecastingPage';
import ProjectsPage from './pages/ProjectsPage';
import FuturePage from './pages/FuturePage';
import SolutionsPage from './pages/SolutionsPage';
import TechnologyPage from './pages/TechnologyPage';
import SecurityPage from './pages/SecurityPage';
import ReportsPage from './pages/ReportsPage';
import ResourcesPage from './pages/ResourcesPage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  // Modal States
  const [demoOpen, setDemoOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 antialiased font-sans selection:bg-sky-500 selection:text-white">
      
      {/* 3D Futuristic Welcome Loading Screen */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Global Navbar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        openDemoModal={() => setDemoOpen(true)}
      />

      {/* Main Page Render */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage 
            setActiveTab={setActiveTab} 
            openDemoModal={() => setDemoOpen(true)}
          />
        )}

        {activeTab === 'platform' && (
          <PlatformPage 
            setActiveTab={setActiveTab}
            openDemoModal={() => setDemoOpen(true)}
          />
        )}

        {activeTab === 'copilot' && (
          <CopilotPage />
        )}

        {activeTab === 'analytics' && (
          <AnalyticsPage />
        )}

        {activeTab === 'risk' && (
          <RiskPage />
        )}

        {activeTab === 'forecasting' && (
          <ForecastingPage />
        )}

        {activeTab === 'projects' && (
          <ProjectsPage 
            onSelectProject={(proj) => setSelectedProject(proj)}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'future' && (
          <FuturePage 
            openDemoModal={() => setDemoOpen(true)}
          />
        )}

        {activeTab === 'solutions' && (
          <SolutionsPage 
            openDemoModal={() => setDemoOpen(true)}
          />
        )}

        {activeTab === 'technology' && (
          <TechnologyPage />
        )}

        {activeTab === 'security' && (
          <SecurityPage />
        )}

        {activeTab === 'reports' && (
          <ReportsPage />
        )}

        {activeTab === 'resources' && (
          <ResourcesPage 
            onSelectArticle={(art) => setSelectedArticle(art)}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage 
            openDemoModal={() => setDemoOpen(true)}
          />
        )}

        {activeTab === 'team' && (
          <TeamPage />
        )}

        {activeTab === 'careers' && (
          <CareersPage 
            onApplyJob={(job) => setSelectedJob(job)}
          />
        )}

        {activeTab === 'contact' && (
          <ContactPage 
            openDemoModal={() => setDemoOpen(true)}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer 
        setActiveTab={setActiveTab}
        openDemoModal={() => setDemoOpen(true)}
      />

      {/* Global Modals */}
      <DemoRequestModal 
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
      />

      <ProjectDetailModal 
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigateToDemo={(tab) => {
          setSelectedProject(null);
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <JobApplyModal 
        job={selectedJob}
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
      />

      <ArticleModal 
        article={selectedArticle}
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

    </div>
  );
}
