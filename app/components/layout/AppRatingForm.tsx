"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { Buttons } from "@app/components/";
import { ArrowRight, RatingStarIcon, SpinnerIcon } from "@app/assets/icons";

const ratingFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  review: z.string().min(10, "Review must be at least 10 characters"),
  rating: z.number().min(1, "Please select a rating").max(5),
});

type RatingFormData = z.infer<typeof ratingFormSchema>;

export const AppRatingForm = () => {
  const [selectedRating, setSelectedRating] = React.useState<number>(0);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<RatingFormData>({
    resolver: zodResolver(ratingFormSchema),
  });

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating);
    setValue("rating", rating);
  };

  const onSubmit = (data: z.infer<typeof ratingFormSchema>) => {
    const templateParams = {
      from_name: data.name,
      to_name: "xtend-media@outlook.com",
      message: data.review,
      rating: data.rating,
    };
    if (formRef.current) {
      setIsSubmitting(true);
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
        )
        .then(
          () => {
            reset();
            setShowSuccess(true);
            setIsSubmitting(false);
            setTimeout(() => setShowSuccess(false), 5000);
          },
          (error) => {
            console.warn("FAILED...", JSON.stringify(error));
            setIsSubmitting(false);
          }
        );
    }
  };

  if (showSuccess) {
    return (
      <div className="rate">
        <div className="rate__form">
          <div className="rate__form-success">
            <h2>Thank you!</h2>
            <p>We will review your comment as soon as possible.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rate" id="rating-form">
      <div className="rate__form">
        <h2>Rate your recent experience</h2>
        <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
          <div className="rate__form-content">
            <div className="form-star__list">
              {[1, 2, 3, 4, 5].map((rating) => (
                <div
                  key={rating}
                  className={`form-star ${
                    rating <= selectedRating ? "form-star--checked" : ""
                  }`}
                  onClick={() => handleStarClick(rating)}
                >
                  <RatingStarIcon className="form-star__icon" />
                </div>
              ))}
            </div>
            {errors.rating && (
              <div className="error-message">{errors.rating.message}</div>
            )}

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your name"
                {...register("name")}
              />
              {errors.name && (
                <div className="error-message">{errors.name.message}</div>
              )}
            </div>

            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Your review"
                {...register("review")}
              ></textarea>
              {errors.review && (
                <div className="error-message">{errors.review.message}</div>
              )}
            </div>

            <div className="rate__form-btns">
              <Buttons
                variant="secondary"
                disabled={isSubmitting}
                icon={<ArrowRight className="" />}
              >
                {isSubmitting ? <SpinnerIcon className="spinner" /> : "Send"}
              </Buttons>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
