import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, CheckCircle, PlayCircle, Target } from "lucide-react";
import { DateTime } from "luxon";

interface ProjectMilestone {
  id: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "upcoming";
  startDate: string;
  endDate: string;
  progress: number;
}

interface ProjectTimelineProps {
  projectName: string;
  milestones: ProjectMilestone[];
}

export const ProjectTimeline: React.FC<ProjectTimelineProps> = ({
  projectName,
  milestones,
}) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "in-progress":
        return <PlayCircle className="w-5 h-5 text-blue-500" />;
      case "upcoming":
        return <Target className="w-5 h-5 text-gray-400" />;
      default:
        return <Target className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "in-progress":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "upcoming":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatDate = (dateString: string) => {
    return DateTime.fromISO(dateString).toFormat("MMM dd, yyyy");
  };

  const getDuration = (startDate: string, endDate: string) => {
    const start = DateTime.fromISO(startDate);
    const end = DateTime.fromISO(endDate);
    const duration = end.diff(start, ["days"]);
    return Math.ceil(duration.days);
  };

  const getProjectProgress = () => {
    const completed = milestones.filter((m) => m.status === "completed").length;
    return Math.round((completed / milestones.length) * 100);
  };

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Project Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track the progress of your {projectName} project with our detailed
            timeline
          </p>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-0">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Start Date
                  </h3>
                  <p className="text-muted-foreground">
                    {formatDate(milestones[0]?.startDate || "")}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Total Duration
                  </h3>
                  <p className="text-muted-foreground">
                    {milestones.length > 0 &&
                    milestones[milestones.length - 1]?.endDate
                      ? `${getDuration(
                          milestones[0].startDate,
                          milestones[milestones.length - 1].endDate
                        )} days`
                      : "TBD"}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Progress
                  </h3>
                  <p className="text-muted-foreground">
                    {getProjectProgress()}% Complete
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-primary">
                    Overall Progress
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {getProjectProgress()}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${getProjectProgress()}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-300"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-white rounded-full border-4 border-gray-200 items-center justify-center relative z-10">
                    {getStatusIcon(milestone.status)}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-primary mb-2">
                              {milestone.title}
                            </h3>
                            <Badge
                              variant="outline"
                              className={`${getStatusColor(milestone.status)}`}
                            >
                              {milestone.status.replace("-", " ").toUpperCase()}
                            </Badge>
                          </div>
                          <div className="text-right text-sm text-muted-foreground">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(milestone.startDate)}</span>
                            </div>
                            <div className="flex items-center space-x-2 mt-1">
                              <Clock className="w-4 h-4" />
                              <span>
                                {getDuration(
                                  milestone.startDate,
                                  milestone.endDate
                                )}{" "}
                                days
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4">
                          {milestone.description}
                        </p>

                        {/* Individual Progress Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">
                              Milestone Progress
                            </span>
                            <span className="font-medium">
                              {milestone.progress}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${milestone.progress}%` }}
                              transition={{
                                duration: 1,
                                delay: 0.5 + index * 0.1,
                              }}
                              viewport={{ once: true }}
                              className={`h-2 rounded-full transition-all duration-300 ${
                                milestone.status === "completed"
                                  ? "bg-green-500"
                                  : milestone.status === "in-progress"
                                  ? "bg-blue-500"
                                  : "bg-gray-300"
                              }`}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
