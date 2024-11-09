import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center "></section>
      <div className="flex gap-6 justify-center">
        <Link to={"/jobs"}>
          <Button size="xl">Find Jobs</Button>
        </Link>
        <Link to={"/post-job"}>
          <Button size="xl">Post a Job</Button>
        </Link>
      </div>

      <section className="flex flex-col md:flex-row items-center justify-center w-full gap-4 fixed bottom-0 mb-1 ">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default LandingPage;
