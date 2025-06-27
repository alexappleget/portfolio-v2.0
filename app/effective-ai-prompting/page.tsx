import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPostPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Back to Portfolio */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-purple-400 transition-colors hover:text-purple-300"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span className="rounded-full bg-purple-500/20 px-3 py-1 text-purple-300">
              AI
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>2025-06-26</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>8 min read</span>
            </div>
          </div>

          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            Mastering AI Prompting with PRDs
          </h1>
          <p className="text-xl text-slate-300">
            Learn how to craft structured PRD documents that enable AI models to
            generate fully functional UIs on the first prompt—no reprompting
            required.
          </p>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white">
              AI Prompting
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white">
              Product Management
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white">
              Documentation
            </span>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-md flex flex-col gap-8">
            <p className="text-lg leading-relaxed text-slate-200">
              In this post, I&apos;ll walk you through how to craft a clear and
              structured Product Requirement Document (PRD) that&apos;s
              specifically designed to prompt AI agents effectively. When done
              right, this approach often results in fully functional UI layouts
              on the very first prompt.
            </p>
            <p className="text-lg leading-relaxed text-slate-200">
              The PRD we&apos;ll be using as our case study is for an internal
              Admin Dashboard I built for a project called{" "}
              <strong className="text-purple-300">Secret Santa Exchange</strong>
              . It&apos;s a tool that gives developers full control over gift
              exchange groups, user profiles, member assignments, and
              AI-generated gift suggestions.
            </p>
            <p className="text-lg leading-relaxed text-slate-200">
              As we go through each section of the document, I&apos;ll show you
              how I structured the requirements in a way that makes it easy for
              an AI agent to understand, reason about, and generate what you
              want.
            </p>
            <h2 className="text-3xl font-bold text-white mb-6 mt-12 border-l-4 border-purple-400 pl-4">
              1. Header of Your PRD Document
            </h2>
            <Image
              src="/prd-title.png"
              alt="Title section of the PRD document"
              width={400}
              height={400}
              className="rounded-lg border border-white/20 shadow-lg"
            />
            <p className="text-lg leading-relaxed text-slate-200">
              Start your PRD with a clear title that briefly describes the
              feature or product area (e.g.,{" "}
              <strong className="text-purple-300">
                Secret Santa AI – Admin Dashboard
              </strong>
              ). While the AI may not rely heavily on the title, it helps you
              and your team quickly identify the document&apos;s purpose.
            </p>
            <div className="bg-slate-800/50 rounded-lg p-6 border border-white/10">
              <p className="text-base font-medium text-slate-200 mb-4">
                Include these essential elements:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong className="text-white">Document Owner</strong> - so
                    collaborators know who to contact for clarification
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong className="text-white">Date Created</strong> - to
                    track document age and relevancy
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong className="text-white">Version Number</strong> -
                    especially useful when iterating or collaborating across
                    teams
                  </span>
                </li>
              </ul>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6 mt-12 border-l-4 border-purple-400 pl-4">
              2. Overview Section
            </h2>
            <p className="text-lg leading-relaxed text-slate-200">
              Next up, let&apos;s dive into the most critical section of the
              document: <strong className="text-purple-300">Overview</strong>.
            </p>
            <Image
              src="/prd-overview.png"
              alt="Overview section of the PRD document"
              width={1500}
              height={400}
              className="rounded-lg border border-white/20 shadow-lg"
            />
            <p className="text-lg leading-relaxed text-slate-200">
              The overview provides a high-level summary of the product or
              feature you want the AI to build. This section sets the foundation
              for everything that follows. If the AI misunderstands this, it
              will likely get the rest wrong.
            </p>
            <div className="bg-slate-800/50 rounded-lg p-6 border border-white/10">
              <p className="text-base font-medium text-slate-200 mb-4">
                Write your overview as if you&apos;re explaining the product to
                a new team member. Be clear about:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <strong className="text-white">What the product is</strong>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <strong className="text-white">Who it&apos;s for</strong>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <strong className="text-white">
                    What core functionality it needs to support
                  </strong>
                </li>
              </ul>
            </div>
            <p className="text-lg leading-relaxed text-slate-200">
              In my example, I included all relevant database tables up front.
              Why? Because this admin dashboard needs to read from and write to
              those tables. Giving the AI schema-level detail early helps it
              understand how the UI and logic should interact with the database.
            </p>
            <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-lg p-6 border border-purple-400/30">
              <p className="text-base font-semibold text-purple-200 mb-3">
                💡 IMPORTANT:
              </p>
              <p className="text-slate-200 leading-relaxed">
                Before moving on, review your overview carefully to ensure it
                clearly explains what you&apos;re building, why it matters, and
                which core elements, like key features, data models, or user
                roles, should be included. This section is critical because it
                frames the context the AI uses to generate accurate and relevant
                output. A vague or incomplete overview often leads to misaligned
                results, so take the time to get it right.
              </p>
            </div>
            <p className="text-lg leading-relaxed text-slate-200">
              After writing the overview, the next section should break down
              each specific feature you want the AI to build. Think of this like
              writing a set of instructions per component or screen. If
              you&apos;re building a portfolio, this might include sections like
              the homepage, about page, or contact form, each with layout and
              behavior details. In my case, since I&apos;m building an admin
              dashboard tied to a database, I describe each table and explain
              exactly what functionality I want the dashboard to provide for
              managing that data.
            </p>
            <Image
              src="/prd-section.png"
              alt="Example database feature section"
              width={750}
              height={400}
              className="rounded-lg border border-white/20 shadow-lg"
            />
            <p className="text-lg leading-relaxed text-slate-200">
              In the example above, I titled the section{" "}
              <strong className="text-purple-300">
                Database-Centric Feature Mapping
              </strong>{" "}
              because I was breaking down dashboard functionality based on
              database tables. You should name this section based on the
              organizing logic behind your features—whether it&apos;s{" "}
              <strong className="text-purple-300">Portfolio Sections</strong>,{" "}
              <strong className="text-purple-300">E-Commerce Pages</strong>, or
              something else entirely. The label itself doesn&apos;t directly
              influence the AI, but it helps you and your team stay organized
              when reviewing or expanding the document later.
            </p>
            <p className="text-lg leading-relaxed text-slate-200">
              Beneath your section title, create clear and well-structured
              subsections for each feature, database table, or page your product
              includes. This is arguably the most critical part of your PRD
              because it&apos;s where you translate your product vision into
              actionable, detailed instructions. The AI uses this section to
              understand functionality, structure, and interactions. So, the
              more precise and thorough you are here, the better your results
              will be. Missing or vague details often lead to misalignment and
              time-consuming reprompting. In my example above, I included just
              one subsection, since the others follow a similar pattern with
              slight variations in how I want each part to function.
            </p>
            <p className="text-lg leading-relaxed text-slate-200">
              I name each subsection after the corresponding database table to
              help the AI map the functionality to the underlying data
              structure. Alongside that, I include a more human-readable name,
              usually the label I want displayed in the dashboard’s sidebar tab,
              so the AI understands both the technical and user-facing contexts.
              Below the title, I add a brief description that acts like a
              mini-overview, summarizing the purpose of that section. I then
              describe the specific dashboard features I want for interacting
              with that table, such as: viewing entries, filtering, editing, or
              bulk actions. Finally, I include example user actions or workflows
              to ground the AI&apos;s understanding in real-world usage. These
              examples help align the output more closely with how the section
              should function in practice.
            </p>
            <h2 className="text-3xl font-bold text-white mb-6 mt-12 border-l-4 border-purple-400 pl-4">
              3. UI/UX Design
            </h2>
            <Image
              src="/prd-ui.png"
              alt="UI/UX Design section of document"
              width={750}
              height={400}
              className="rounded-lg border border-white/20 shadow-lg"
            />
            <p className="text-lg leading-relaxed text-slate-200">
              Now that the features and functionality are clearly defined,
              it&apos;s time to guide the AI on how those features should look
              and feel. This section covers the{" "}
              <strong className="text-purple-300">UI/UX Design</strong>,
              starting with the global layout of the admin dashboard. Here, I
              define the core navigation structure, mapping each sidebar item to
              its corresponding data source. This ensures the AI aligns the
              interface with the backend logic we previously described. After
              that, I walk through specific views (starting with the Users
              section) as an example of how each page should be structured and
              what interactions should be available to the user.
            </p>
            <h2 className="text-3xl font-bold text-white mb-6 mt-12 border-l-4 border-purple-400 pl-4">
              4. Tech Stack
            </h2>
            <Image
              src="/prd-tech.png"
              alt="Tech Stack used for product"
              width={500}
              height={400}
              className="rounded-lg border border-white/20 shadow-lg"
            />
            <p className="text-lg leading-relaxed text-slate-200">
              Lastly, I include a section specifying the tech stack I want the
              AI to use, such as React with TypeScript, Tailwind CSS, or any
              relevant libraries or frameworks. This ensures the generated code
              is compatible with my existing codebase and follows the
              conventions I&apos;m already using. It also helps the AI choose
              the right syntax, tooling, and architecture patterns from the
              start, reducing the need for refactoring later.
            </p>
            <h2 className="text-3xl font-bold text-white mb-6 mt-12 border-l-4 border-purple-400 pl-4">
              Putting It All Together
            </h2>
            <p className="text-lg leading-relaxed text-slate-200">
              With your PRD complete, you&apos;re ready for the fun part: seeing
              what the AI can build. I personally use Vercel&apos;s{" "}
              <Link
                href="https://v0.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-purple-200 underline decoration-purple-400/50 hover:decoration-purple-300 transition-colors"
              >
                v0 AI
              </Link>
              , but you can use any capable model that accepts document inputs.
              Simply start a new chat, drag and drop your PRD file into the chat
              bar, and hit enter. The AI will take a moment to analyze your
              document and begin generating a fully-formed UI based on your
              specs. No reprompting was needed in my case. Just my
              well-structured PRD document. Below, you&apos;ll find a video
              showing exactly how I uploaded my file, and another showing the
              result the AI returned.
            </p>
            <h3 className="text-2xl font-semibold text-white mb-4 mt-8">
              Prompting the AI with my document file:
            </h3>
            <video
              src="/prompting-v0.mp4"
              autoPlay
              loop
              muted
              className="w-full max-w-2xl rounded-lg border border-white/20 shadow-lg"
            />
            <h3 className="text-2xl font-semibold text-white mb-4 mt-8">
              The end result:
            </h3>
            <video
              src="/final-result.mp4"
              autoPlay
              loop
              muted
              className="w-full max-w-2xl rounded-lg border border-white/20 shadow-lg"
            />
          </div>
        </article>
      </div>
    </div>
  );
}
