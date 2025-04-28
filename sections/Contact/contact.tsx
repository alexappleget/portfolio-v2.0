import { Input } from "@/components/Input/input";
import { Label } from "@/components/Label/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select/select";
import { Textarea } from "@/components/TextArea/textarea";

export const Contact = () => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Your email"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="project-type">Project Type</Label>
        <Select name="project-type" required>
          <SelectTrigger>
            <SelectValue placeholder="Select project type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="saas">SaaS Development</SelectItem>
            <SelectItem value="website">Custom Website</SelectItem>
            <SelectItem value="optimization">Web App Optimization</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell me about your project or idea"
          className="min-h-[120px]"
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center px-4 py-2 bg-[#4f46e5] text-white rounded-lg hover:bg-[#6366f1] transition hover:shadow-md"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};
