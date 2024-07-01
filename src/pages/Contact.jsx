import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input placeholder="Name" {...register("name")} />
        <Input type="email" placeholder="Email" {...register("email")} />
        <Input placeholder="Subject" {...register("subject")} />
        <Textarea placeholder="Message" {...register("message")} />
        <Button type="submit" variant="primary">Send Message</Button>
      </form>
    </div>
  );
};

export default Contact;