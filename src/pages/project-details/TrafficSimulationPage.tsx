import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { ArrowLeft, Building2, Target, Lightbulb, TrendingUp, ImageIcon, Github, ExternalLink } from 'lucide-react';

const TrafficSimulationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/academic-projects">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-white text-blue-600">Computer Vision</Badge>
            <Badge className="bg-white text-blue-600">Simulation</Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Traffic Signal Light Simulation and Violation Alert System
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Intelligent traffic management system with real-time violation detection
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/taiaburbd/traffic-ss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Github className="h-5 w-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="md:col-span-2 space-y-8">
            {/* Institution Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-blue-600" />
                  Institution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-lg p-2 flex items-center justify-center">
                    <img
                      src="/logos/ub-logo.png"
                      alt="University of Burgundy"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">University of Burgundy</h3>
                    <p className="text-gray-600">Le Creusot, France</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Software Engineering Course Project for MAIA (Medical Imaging and Applications)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Objective Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-blue-600" />
                  Project Objective
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  The main objective of this project is to create a comprehensive traffic intersection simulation
                  system with real-time violation detection capabilities. The system enhances road safety through
                  intelligent traffic management and automated violation monitoring.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Key Focus:</strong> Simulate realistic traffic scenarios while monitoring and detecting
                    traffic violations by both vehicles and pedestrians to improve road safety awareness.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Main Tasks Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                  Main Tasks and Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Traffic Light Operation Simulation</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Simulates the operation of traffic lights with realistic timing, including red, yellow, and
                        green light cycles with countdown timers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Pedestrian Light Simulation</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Implements pedestrian crossing signals synchronized with vehicle traffic lights to ensure safe
                        pedestrian crossings.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Vehicle Violation Detection</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Detects when vehicles cross the stop line during red light or fail to stop before yellow
                        light transitions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Pedestrian Violation Detection</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Monitors pedestrian crossings and identifies violations when pedestrians cross during don't
                        walk signals.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Real-time Violation Alerts</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Displays visual and audio messages when violations are detected, including beep sound alerts
                        for immediate notification.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Traffic Light Rules */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  Traffic Light Rules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                    <div className="w-4 h-4 bg-red-500 rounded-full mt-1"></div>
                    <div>
                      <strong className="text-red-700">Red Light:</strong>
                      <span className="text-gray-700 ml-2">
                        Stop and wait behind the stop line until the light turns green.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full mt-1"></div>
                    <div>
                      <strong className="text-yellow-700">Yellow Light:</strong>
                      <span className="text-gray-700 ml-2">
                        Stop unless you have already crossed the stop line before it turned yellow.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="w-4 h-4 bg-green-500 rounded-full mt-1"></div>
                    <div>
                      <strong className="text-green-700">Green Light:</strong>
                      <span className="text-gray-700 ml-2">
                        Proceed if the intersection is clear and safe to cross.
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Each traffic light includes a timer displaying the remaining time before the light changes state.
                </p>
              </CardContent>
            </Card>

            {/* Visual Demonstration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="h-6 w-6 text-blue-600" />
                  Visual Demonstration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg overflow-hidden border">
                  <img
                    src="/images/project_traffic-signal-simulation.png"
                    alt="Traffic Simulation Interface"
                    className="w-full h-auto"
                  />
                  <div className="bg-gray-50 p-3 border-t">
                    <p className="text-sm text-gray-600">Traffic intersection simulation interface</p>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden border">
                  <img
                    src="/images/project_traffic-signal-simulation.gif"
                    alt="Violation Detection"
                    className="w-full h-auto"
                  />
                  <div className="bg-gray-50 p-3 border-t">
                    <p className="text-sm text-gray-600">Violation detection and alert system in action</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Project Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Project Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-1">Status</h4>
                    <Badge className="bg-green-100 text-green-800">Completed</Badge>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-1">Year</h4>
                    <p className="text-gray-900">2022</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-1">Course</h4>
                    <p className="text-gray-900">Software Engineering</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-1">Program</h4>
                    <p className="text-gray-900">MAIA (Medical Imaging and Applications)</p>
                  </div>
                </CardContent>
              </Card>

              {/* Technologies */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Technologies Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Pygame</Badge>
                    <Badge variant="secondary">Computer Vision</Badge>
                    <Badge variant="secondary">Simulation</Badge>
                    <Badge variant="secondary">Real-time Detection</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Contributors */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contributors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <a
                      href="https://github.com/taiaburbd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                    >
                      <Github className="h-4 w-4" />
                      Taiabur Rahman
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/thitiphatarm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                    >
                      <Github className="h-4 w-4" />
                      Thitiphat ARM
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a
                    href="https://github.com/taiaburbd/traffic-ss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    <Github className="h-4 w-4" />
                    GitHub Repository
                    <ExternalLink className="h-3 w-3 ml-auto" />
                  </a>
                  <a
                    href="https://towardsdatascience.com/traffic-intersection-simulation-using-pygame-689d6bd7687a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Reference Article
                    <ExternalLink className="h-3 w-3 ml-auto" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficSimulationPage;
