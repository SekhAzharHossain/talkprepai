import { InterviewCardProps, Feedback } from '@/types';
import React from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from './ui/button';

const InterviewCard = ({
  interviewId,
  // userId,
  role,
  type,
  // techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;
  const formattedDate = dayjs(feedback?.createdAt || createdAt).format('MMM D, YYYY');

  return (
    <Card className="flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader>
        <CardTitle>{role} Interview</CardTitle>
        <CardDescription className="capitalize">{normalizedType}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-2">
        <p className="text-sm text-gray-500">🗓️ {formattedDate}</p>
        <p className="text-lg font-semibold">
          Score: {feedback?.totalScore ?? '---'}/100
        </p>
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-2">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {feedback?.finalAssessment ?? "You haven't taken the interview yet."}
        </p>
        <Button asChild>
          <Link href={feedback ? `/interview/${interviewId}/feedback` : `/interview/${interviewId}`}>
            {feedback ? 'Check Feedback' : 'View Interview'}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InterviewCard;
