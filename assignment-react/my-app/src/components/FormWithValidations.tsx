"use client"
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  TextField,
  Button,
  Alert,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

// Validation schema
const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(3, 'Full Name must be at least 3 characters')
    .required('Full Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  age: Yup.number()
    .min(18, 'You must be at least 18 years old')
    .nullable()
    .transform((value, originalValue) => (originalValue === '' ? null : value)),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .required('Message is required'),
});

export default function FormWithSummary() {
  const [showErrorSummary, setShowErrorSummary] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      age: '',
      message: '',
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values, { resetForm }) => {
      setShowErrorSummary(false); 
      alert('Form submitted:\n' + JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  const errorMessages = Object.entries(formik.errors)
    .filter(([field, message]) => formik.touched[field])
    .map(([field, message]) => `${field.charAt(0).toUpperCase() + field.slice(1)}: ${message}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
    if (!formik.isValid || Object.keys(formik.errors).length > 0) {
      setShowErrorSummary(true);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 500, mx: 'auto', mt: 5, display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <Typography variant="h5">Contact Form</Typography>

      {showErrorSummary && errorMessages.length > 0 && (
        <Alert severity="error">
          <Typography variant="subtitle2">Please fix the following errors:</Typography>
          <List dense>
            {errorMessages.map((msg, idx) => (
              <ListItem key={idx}>
                <ListItemText primary={msg} />
              </ListItem>
            ))}
          </List>
        </Alert>
      )}

      <TextField
        label="Full Name"
        name="fullName"
        value={formik.values.fullName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.fullName && Boolean(formik.errors.fullName)}
        helperText={formik.touched.fullName && formik.errors.fullName}
        fullWidth
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        fullWidth
      />

      <TextField
        label="Age (Optional)"
        name="age"
        type="number"
        value={formik.values.age}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.age && Boolean(formik.errors.age)}
        helperText={formik.touched.age && formik.errors.age}
        fullWidth
      />

      <TextField
        label="Message"
        name="message"
        multiline
        minRows={3}
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
        fullWidth
      />

      <Button variant="contained" type="submit" color="primary">
        Submit
      </Button>
    </Box>
  );
}
