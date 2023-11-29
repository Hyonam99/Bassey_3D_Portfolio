## TODO !

1. Add a Testimonial section later, that will show certificates, volunteering roles and others....having an image and a short description

2. Code below will be reused at a later time for a proper mailing integration
<!-- 
        <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={Yup.object({
                name: Yup.string().required('name is required'),
                email: Yup.string().email('Invalid email address').required('email is required'),
                message: Yup.string().required('message is required'),
            })}
            onSubmit={(values) => 
              window.open(`mailto:victorbassey767@gmail.com?subject=Name: ${values.name}&body=${values.message}`, 'blank')
          }
        >
            {({ handleSubmit, getFieldProps, touched, errors }) => (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <Input
                type="text"
                name="name"
                placeholder="Enter your name here..."
                {...getFieldProps('name')}
                className="bg-tertiary py-4 px-4 
                  placeholder:text-secondary text-white 
                  rounded-lg outline-none border-none font-medium"
              />
              {touched.name && errors.name ? (<small className="text-red-600">{errors.name}</small>): null}
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email here..."
                {...getFieldProps('email')}
                className="bg-tertiary py-4 px-4 
                  placeholder:text-secondary text-white 
                  rounded-lg outline-none border-none font-medium"
              />
              {touched.email && errors.email ? (<small className="text-red-600">{errors.email}</small>): null}
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <Textarea
                name="message"
                rows="7"
                resize='none'
                placeholder="Enter your message here..."
                {...getFieldProps('message')}
                className="bg-tertiary py-4 px-4 
                  placeholder:text-secondary text-white 
                  rounded-lg outline-none border-none font-medium"
              />
              {touched.message && errors.message ? (<small className="text-red-600">{errors.message}</small>): null}
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 my-0 mx-auto w-3/5 outline-none 
              text-white font-bold shadow-md shadow-primary rounded-xl text-center"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
          )}
        </Formik>
 -->