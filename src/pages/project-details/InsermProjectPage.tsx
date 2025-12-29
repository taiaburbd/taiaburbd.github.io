import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { ArrowLeft, Building2, Target, Lightbulb, TrendingUp, ImageIcon } from 'lucide-react';

const InsermProjectPage: React.FC = () => {
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
            <Badge className="bg-white text-blue-600">Medical Imaging</Badge>
            <Badge className="bg-white text-blue-600">Deep Learning</Badge>
            <Badge className="bg-white text-blue-600">3D Segmentation</Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Deep Learning-Driven Automated Segmentation of High-Resolution 3D Histological Mouse Brain Volumes
          </h1>
          <p className="text-xl text-blue-100">
            Enhancing neurobiological studies through automated segmentation framework for high-resolution 3D histological mouse brain images
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="md:col-span-2 space-y-8">
            {/* Institutions Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-blue-600" />
                  Institutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">The National Institute of Health and Medical Research (INSERM)</h4>
                      <p className="text-gray-600 text-sm">Dijon, France</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">ICMUB Laboratory, CNRS UMR 6302</h4>
                      <p className="text-gray-600 text-sm">University of Burgundy, Dijon, France</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">NeuroGeM Laboratory, INSERM Unit 1231</h4>
                      <p className="text-gray-600 text-sm">University of Burgundy, Dijon, France</p>
                    </div>
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
                  The primary objective of this project is to enhance neurobiological studies through the development 
                  of an automated segmentation framework for high-resolution 3D histological mouse brain images. 
                  This research aims to provide detailed and efficient brain imaging capabilities essential for 
                  understanding neurological development and disorders.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Key Focus:</strong> Develop a robust automated pipeline that can accurately segment 
                    brain structures while significantly reducing processing time from manual annotation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Background</h4>
                  <p className="text-gray-700">
                    Detailed and efficient brain imaging is crucial for understanding neurological development and 
                    disorders. Traditional manual segmentation methods are time-consuming and require expert knowledge, 
                    making automated approaches essential for large-scale studies.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Methods Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                  Methods and Approach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Deep Learning Models Used</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded flex items-center justify-center">
                          <span className="text-indigo-600 text-xs">•</span>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">nnU-Net</h5>
                          <p className="text-sm text-gray-600">
                            Automated pipeline configuration for medical image segmentation with self-configuring 
                            method that adapts to any dataset
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded flex items-center justify-center">
                          <span className="text-indigo-600 text-xs">•</span>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">Segment Anything Model (SAM)</h5>
                          <p className="text-sm text-gray-600">
                            Adapted for 3D medical imaging to provide flexible and accurate segmentation capabilities
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Dataset Specifications</h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center gap-2">
                          <span className="text-blue-600">▸</span>
                          <span><strong>Format:</strong> Nearly raw raster data (nrrd)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-600">▸</span>
                          <span><strong>Volume Size:</strong> 25-35 GB per volume</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-600">▸</span>
                          <span><strong>Data Type:</strong> Private dataset of high-resolution 3D histological images</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  Results and Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Performance Metrics</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
                      <p className="text-sm text-green-700 font-medium mb-2">Binary Segmentation</p>
                      <p className="text-4xl font-bold text-green-900 mb-1">0.99</p>
                      <p className="text-xs text-green-700">Dice Similarity Coefficient</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
                      <p className="text-sm text-blue-700 font-medium mb-2">Multi-class Segmentation</p>
                      <p className="text-4xl font-bold text-blue-900 mb-1">0.87</p>
                      <p className="text-xs text-blue-700">Dice Similarity Coefficient</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Efficiency Gains</h4>
                  <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="text-center flex-1">
                        <p className="text-sm text-gray-600 mb-1">Manual Segmentation</p>
                        <p className="text-3xl font-bold text-red-600">30 hours</p>
                      </div>
                      <div className="text-2xl text-gray-400">→</div>
                      <div className="text-center flex-1">
                        <p className="text-sm text-gray-600 mb-1">Automated Segmentation</p>
                        <p className="text-3xl font-bold text-green-600">5 minutes</p>
                      </div>
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-4">
                      <strong>360× faster</strong> processing time per volume
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Visual Demonstrations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="h-6 w-6 text-blue-600" />
                  Visual Demonstrations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Segmentation Pipeline</h4>
                  <div className="rounded-lg overflow-hidden border">
                    <img
                      src="/project-photos/inserm_3d_seg_method.png"
                      alt="Segmentation Pipeline"
                      className="w-full h-auto"
                    />
                    <div className="bg-gray-50 p-3 border-t">
                      <p className="text-sm text-gray-600">
                        Complete pipeline architecture showing data flow from input to final segmentation
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Brain Volume Sequence</h4>
                  <div className="rounded-lg overflow-hidden border">
                    <img
                      src="/project-photos/inserm_3d_seg_result_dataset_volume_sequence.png"
                      alt="Volume Sequence"
                      className="w-full h-auto"
                    />
                    <div className="bg-gray-50 p-3 border-t">
                      <p className="text-sm text-gray-600">
                        Sequential visualization of 3D brain volumes showing different anatomical perspectives
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Segmented Half and Full Brain</h4>
                  <div className="rounded-lg overflow-hidden border">
                    <img
                      src="/project-photos/inserm_3d_seg_result_half_and_full_brain.png"
                      alt="Segmented Brain"
                      className="w-full h-auto"
                    />
                    <div className="bg-gray-50 p-3 border-t">
                      <p className="text-sm text-gray-600">
                        Comparison of segmented brain hemispheres and complete brain structure
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Performance Analysis</h4>
                  <div className="rounded-lg overflow-hidden border">
                    <img
                      src="/project-photos/inserm_3d_seg_result_box_plot.PNG"
                      alt="Box Plot Results"
                      className="w-full h-auto"
                    />
                    <div className="bg-gray-50 p-3 border-t">
                      <p className="text-sm text-gray-600">
                        Statistical distribution of segmentation accuracy across different brain regions
                      </p>
                    </div>
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
                    <h4 className="text-sm font-semibold text-gray-600 mb-1">Duration</h4>
                    <p className="text-gray-900">Jan 2024 - June 2024</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-1">Role</h4>
                    <p className="text-gray-900">Master Thesis Intern</p>
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
                    <Badge variant="secondary">PyTorch</Badge>
                    <Badge variant="secondary">nnU-Net</Badge>
                    <Badge variant="secondary">SAM</Badge>
                    <Badge variant="secondary">3D Medical Imaging</Badge>
                    <Badge variant="secondary">Deep Learning</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Key Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Key Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>360× reduction in processing time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>0.99 DSC for binary segmentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>0.87 DSC for multi-class segmentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Automated pipeline configuration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsermProjectPage;
