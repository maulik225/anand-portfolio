import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Anand Gajjar Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Projects
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Anand Gajjar</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Geophysicist with expertise in seismic data acquisition and processing, specializing in oil and gas
                    exploration.
                  </p>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I am a geophysicist with a strong background in seismic data acquisition and processing. I hold a
                  Ph.D. in Geophysics from the University of California, Berkeley, where I specialized in advanced
                  seismic imaging techniques.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  In my professional career, I have worked on numerous oil and gas exploration projects, leading teams
                  in the acquisition and processing of high-quality seismic data. I have expertise in a wide range of
                  geophysical techniques, including 2D and 3D seismic surveys, gravity and magnetic surveys, and
                  electromagnetic methods.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Expertise</h2>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-xl font-bold">Seismic Data Acquisition</h3>
                      <p className="text-muted-foreground">
                        Experienced in planning and executing 2D and 3D seismic surveys, including the deployment of
                        geophones and vibroseis trucks.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-xl font-bold">Seismic Data Processing</h3>
                      <p className="text-muted-foreground">
                        Skilled in the application of advanced seismic processing techniques, such as deconvolution,
                        velocity analysis, and pre-stack depth migration.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-xl font-bold">Geophysical Interpretation</h3>
                      <p className="text-muted-foreground">
                        Experienced in the interpretation of seismic, gravity, and magnetic data to identify potential
                        hydrocarbon reservoirs and other geological features.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Projects</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here are some of the key projects I have worked on throughout my career as a geophysicist.
              </p>
            </div>
            <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="p-4 bg-muted rounded-lg">
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    alt="Project Image"
                    width={400}
                    height={300}
                    className="rounded-md object-cover w-full aspect-[4/3]"
                  />
                  <CardTitle>Seismic Data Processing</CardTitle>
                  <CardDescription>
                    Developed advanced algorithms for seismic data processing, improving the accuracy of hydrocarbon
                    reservoir identification.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDaysIcon className="h-4 w-4" />
                    <span>2022 - 2023</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Me</h2>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2 mt-8">
              <form className="flex flex-col gap-2">
                <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
                <Input type="email" placeholder="Email" className="max-w-lg flex-1" />
                <Textarea placeholder="Message" className="max-w-lg flex-1" />
                <Button type="submit">Submit</Button>
                <div className="flex items-center justify-center gap-4">
                  <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                    <LinkedinIcon className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                    <InstagramIcon className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Anand Gajjar. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6" />
      </footer>
    </div>
  )
}

function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
