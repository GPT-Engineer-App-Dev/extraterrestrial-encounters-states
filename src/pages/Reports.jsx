import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Reports = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Submit a UFO Report</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input placeholder="Name" {...register("name")} />
        <Input type="email" placeholder="Email" {...register("email")} />
        <Input type="date" placeholder="Date" {...register("date")} />
        <Input placeholder="Location" {...register("location")} />
        <Textarea placeholder="Description" {...register("description")} />
        <Input type="file" {...register("image")} />
        <Button type="submit" variant="primary">Submit Report</Button>
      </form>
    </div>
  );
};

export default Reports;