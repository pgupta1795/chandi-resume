import { Download, Mail, Linkedin, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-xl text-primary">CP</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-primary">
                About
              </Link>
              <Link href="#experience" className="transition-colors hover:text-primary">
                Experience
              </Link>
              <Link href="#skills" className="transition-colors hover:text-primary">
                Skills
              </Link>
              <Link href="#education" className="transition-colors hover:text-primary">
                Education
              </Link>
              <Link href="#publications" className="transition-colors hover:text-primary">
                Publications
              </Link>
              <Link href="#contact" className="transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="hidden md:flex" asChild>
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
            <Button size="sm" className="hidden md:flex" asChild>
              <a href="/Chandi_Pratap_Singh_Resume.pdf" download="Chandi_Pratap_Singh_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center justify-center text-center animate-fade-in">
          <div className="mx-auto max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-primary to-purple-400 dark:from-primary dark:to-purple-300 bg-clip-text text-transparent">
              Chandi Pratap Singh
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              Technical Specialist in PLM, Digital Manufacturing & Analytics
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="/Chandi_Pratap_Singh_Resume.pdf" download="Chandi_Pratap_Singh_Resume.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://www.linkedin.com/in/chandi-pratap-singh-34b56923" target="_blank">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 scroll-mt-16 animate-fade-in-up">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">About Me</h2>
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <p className="text-lg text-card-foreground leading-relaxed">
                Technical professional with over 10 years of experience in Digital Manufacturing, PLM, and Analytics
                solutions. Specialized in MCAD and AEC industries with exposure to techno-commercial roles. I bring a
                consultative approach as an effective communicator with strong relationship building and interpersonal
                skills. Currently seeking interesting and competitive assignments in advanced technologies for growth
                and support functions with an organization of high repute.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 scroll-mt-16 animate-fade-in-up">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Work Experience
            </h2>

            <div className="space-y-8">
              {/* Job 1 */}
              <div className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors duration-300">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <div className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <h3 className="text-xl font-bold">Technical Specialist- PLM</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Badge variant="outline" className="bg-accent/50">
                        2022/11 - Present
                      </Badge>
                    </div>
                  </div>
                  <p className="text-base font-medium text-primary mt-1">TECHNIA UK, United Kingdom</p>
                  <ul className="mt-4 space-y-2 list-disc list-inside text-card-foreground">
                    <li>
                      Engaged in pre-sales activities for 3DEXPERIENCE, CATIA, and SIMULIA software suites, adeptly
                      articulating technical capabilities and benefits to prospective clients.
                    </li>
                    <li>
                      Provided comprehensive support to clients during the implementation phase, offering tailored
                      solutions and troubleshooting, training assistance to ensure smooth integration of 3DEXPERIENCE,
                      CATIA, and SIMULIA into their workflows for both renewals and upselling.
                    </li>
                    <li>
                      Collaborated closely with sales and DS teams to gather feedback from clients, contributing
                      insights for product enhancement for a reputed F1 racing team.
                    </li>
                    <li>
                      Led customer support initiatives, managing a team of technical specialists to ensure timely
                      resolution of client issues and maintaining high customer satisfaction ratings.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Job 2 */}
              <div className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors duration-300">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <div className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <h3 className="text-xl font-bold">Customer Support Lead</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Badge variant="outline" className="bg-accent/50">
                        2021/09 - 2022/10
                      </Badge>
                    </div>
                  </div>
                  <p className="text-base font-medium text-primary mt-1">HCL Technologies Limited, India</p>
                  <ul className="mt-4 space-y-2 list-disc list-inside text-card-foreground">
                    <li>
                      Led a team of support engineers to provide exceptional customer service for enterprise software
                      solutions.
                    </li>
                    <li>
                      Developed and implemented customer support strategies that increased satisfaction ratings by 25%.
                    </li>
                    <li>
                      Coordinated with product development teams to communicate customer feedback and drive product
                      improvements.
                    </li>
                    <li>
                      Conducted specialized training sessions for both internal teams and clients on advanced software
                      features.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Job 3 */}
              <div className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors duration-300">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <div className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <h3 className="text-xl font-bold">Senior Support Engineer- DFMA Solutions</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Badge variant="outline" className="bg-accent/50">
                        2017/01 - 2021/08
                      </Badge>
                    </div>
                  </div>
                  <p className="text-base font-medium text-primary mt-1">HCL Technologies Limited, India</p>
                  <ul className="mt-4 space-y-2 list-disc list-inside text-card-foreground">
                    <li>
                      Provided pre-sales and technical support for DFMPro to OEMs in Aerospace & Defense, Marine &
                      Offshore, High-Tech, Medical, Transportation & Mobility, Oil and Gas, HVAC and MEP clients from
                      Europe and Asia Pacific following an agile approach.
                    </li>
                    <li>
                      Provided consultative selling and support to HVAC customers like Carrier, Whirlpool in planning
                      layouts, Design for Manufacturing and Assembly (DFMA) solutions and assisted design teams in
                      selecting solutions best suited to their SQCD needs.
                    </li>
                    <li>
                      Achieved 100% customer satisfaction for 3 consecutive years with appreciations received from APAC
                      and Europe prospects and clients for annual renewals of DFMPro subscription.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Job 4 */}
              <div className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors duration-300">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <div className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <h3 className="text-xl font-bold">Technical Manager -CAD</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Badge variant="outline" className="bg-accent/50">
                        2016/07 - 2017/07
                      </Badge>
                    </div>
                  </div>
                  <p className="text-base font-medium text-primary mt-1">
                    Gräbert Software India Private Limited, India
                  </p>
                  <ul className="mt-4 space-y-2 list-disc list-inside text-card-foreground">
                    <li>
                      Conducted presales (OEM Client End Demos, Webinars, Lead Generation, Technical write-ups) & sales
                      support (Technical Support, Training, Troubleshooting) activities for Graebert CAD Solution for
                      AEC, HVAC and MEP, Oil & Gas industries.
                    </li>
                    <li>Prepared RFQs, RFIs, tenders for customers of SaaS and PaaS subscription.</li>
                    <li>
                      Established & managed accounts in collaboration with channel partners in West India and received
                      appreciation letters for customer satisfaction from various clients.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Job 5 */}
              <div className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors duration-300">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <div className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <h3 className="text-xl font-bold">Application Engineer -PLM</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Badge variant="outline" className="bg-accent/50">
                        2014/05 - 2016/12
                      </Badge>
                    </div>
                  </div>
                  <p className="text-base font-medium text-primary mt-1">EDS Technologies Private Limited, India</p>
                  <ul className="mt-4 space-y-2 list-disc list-inside text-card-foreground">
                    <li>
                      Provided technical support, troubleshooting, maintenance, training, and part-customization
                      activities for Dassault Solutions- ENOVIA V5, CATIA V5 & V6, Abaqus, 3DVia and DELMIA.
                    </li>
                    <li>
                      Defined business strategies to market a wide range of products for accomplishing sales & profit
                      targets. Involved in sales and tendering projects plans for SaaS modules.
                    </li>
                    <li>Successfully deployed, trained and supported CATIA, ENOVIA for a defense project.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 scroll-mt-16 animate-fade-in-up">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Skills & Expertise
            </h2>

            <Tabs defaultValue="technical" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="technical">Technical Skills</TabsTrigger>
                <TabsTrigger value="soft">Soft Skills</TabsTrigger>
              </TabsList>
              <TabsContent value="technical" className="mt-6">
                <div className="bg-card p-6 rounded-lg shadow-sm border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">CATIA</span>
                          <span>95%</span>
                        </div>
                        <Progress value={95} className="h-2 bg-accent/30" indicatorClassName="bg-primary" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">AutoCAD</span>
                          <span>90%</span>
                        </div>
                        <Progress value={90} className="h-2 bg-accent/30" indicatorClassName="bg-primary" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">SOLIDWORKS</span>
                          <span>85%</span>
                        </div>
                        <Progress value={85} className="h-2 bg-accent/30" indicatorClassName="bg-primary" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">CREO</span>
                          <span>80%</span>
                        </div>
                        <Progress value={80} className="h-2 bg-accent/30" indicatorClassName="bg-primary" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">NX</span>
                          <span>75%</span>
                        </div>
                        <Progress value={75} className="h-2 bg-accent/30" indicatorClassName="bg-primary" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">3D Printing</span>
                          <span>85%</span>
                        </div>
                        <Progress value={85} className="h-2 bg-accent/30" indicatorClassName="bg-primary" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">MATLAB</span>
                          <span>70%</span>
                        </div>
                        <Progress value={70} className="h-2 bg-accent/30" indicatorClassName="bg-primary" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">ABACUS</span>
                          <span>75%</span>
                        </div>
                        <Progress value={75} className="h-2 bg-accent/30" indicatorClassName="bg-primary" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">Microsoft Office365</span>
                          <span>95%</span>
                        </div>
                        <Progress value={95} className="h-2 bg-accent/30" indicatorClassName="bg-primary" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">TABLEAU</span>
                          <span>80%</span>
                        </div>
                        <Progress value={80} className="h-2 bg-accent/30" indicatorClassName="bg-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="soft" className="mt-6">
                <div className="bg-card p-6 rounded-lg shadow-sm border">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      "Customer support",
                      "Time Management",
                      "Team Player",
                      "Creativity",
                      "Quick Learner",
                      "Problem Solving",
                      "Communication",
                      "Critical Thinking",
                      "Public Relation",
                    ].map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center p-3 rounded-md bg-accent/20 border border-accent/30"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-accent/20 border-4 border-primary/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">100%</span>
                  </div>
                  <span className="mt-2 font-medium">English</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-accent/20 border-4 border-primary/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">100%</span>
                  </div>
                  <span className="mt-2 font-medium">Hindi</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-accent/20 border-4 border-primary/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">50%</span>
                  </div>
                  <span className="mt-2 font-medium">German</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 scroll-mt-16 animate-fade-in-up">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Education</h2>

            <div className="space-y-6">
              {/* Education 1 */}
              <div className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-bold">Advance Manufacturing System and Technology (MSc.)</h3>
                    <p className="text-base font-medium text-primary mt-1">University of Liverpool - Liverpool, UK</p>
                  </div>
                  <Badge variant="outline" className="bg-accent/50 whitespace-nowrap">
                    2021/09 - 2022/08
                  </Badge>
                </div>
                <ul className="mt-4 space-y-2 list-disc list-inside text-card-foreground">
                  <li>Awarded First class, Distinction.</li>
                  <li>Project-Evaluation of shapes and textures manufactured by 3D printing with Ultimaker Cura.</li>
                </ul>
              </div>

              {/* Education 2 */}
              <div className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-bold">Sales And Marketing Education (Ex. MBA)</h3>
                    <p className="text-base font-medium text-primary mt-1">TATA Institute of Social Sciences - India</p>
                  </div>
                  <Badge variant="outline" className="bg-accent/50 whitespace-nowrap">
                    2011/07 - 2013/02
                  </Badge>
                </div>
                <ul className="mt-4 space-y-2 list-disc list-inside text-card-foreground">
                  <li>Awarded First Class, Distinction.</li>
                </ul>
              </div>

              {/* Education 3 */}
              <div className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-bold">Mechanical Engineering (B Eng.)</h3>
                    <p className="text-base font-medium text-primary mt-1">University of Pune - India</p>
                  </div>
                  <Badge variant="outline" className="bg-accent/50 whitespace-nowrap">
                    2006/07 - 2010/07
                  </Badge>
                </div>
                <ul className="mt-4 space-y-2 list-disc list-inside text-card-foreground">
                  <li>Received 2:1 in Final Grade</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="py-12 scroll-mt-16 animate-fade-in-up">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Publications</h2>

            <div className="grid gap-6">
              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Design for Additive Manufacturing Guidelines</h3>
                  <p className="text-muted-foreground mb-4">
                    A comprehensive guide on design principles for additive manufacturing technologies.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://dfmpro.geometricglobal.com/2017/08/" target="_blank" rel="noopener noreferrer">
                      Read Publication
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Plastic Injection Simulation in 3DExperience</h3>
                  <p className="text-muted-foreground mb-4">
                    An exploration of plastic injection simulation capabilities within the 3DExperience platform.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a
                      href="https://www.technia.co.uk/blog/plastic-injection-simulation/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Publication
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-12 scroll-mt-16 animate-fade-in-up">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Certifications & Memberships
            </h2>

            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <ul className="space-y-4 list-disc list-inside text-card-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                  <span>Member of Society of Manufacturing Engineers (SME)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                  <span>Member of Institute of Engineering Design (IED)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 scroll-mt-16 animate-fade-in-up">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Contact Me</h2>

            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    <span>Milton Keynes, United Kingdom</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-2" />
                    <span>(+44) 7880919369</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-2" />
                    <span>cp.singh@hotmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="h-5 w-5 text-primary mr-2" />
                    <a
                      href="https://www.linkedin.com/in/chandi-pratap-singh-34b56923"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      linkedin.com/in/chandi-pratap-singh-34b56923
                    </a>
                  </div>
                </div>
                <div className="space-y-4">
                  <Button className="w-full" asChild>
                    <a href="mailto:cp.singh@hotmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/Chandi_Pratap_Singh_Resume.pdf" download="Chandi_Pratap_Singh_Resume.pdf">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a
                      href="https://www.linkedin.com/in/chandi-pratap-singh-34b56923"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Chandi Pratap Singh. All rights reserved.
            </p>
          </div>
          <div className="flex items-center">
            <a
              href="https://www.linkedin.com/in/chandi-pratap-singh-34b56923"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:cp.singh@hotmail.com" className="mx-2">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
