export default function Map() {
  return (
    <section id="map" className="py-12 md:py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Visit Our Location</h2>
          <p className="text-lg text-muted-foreground">Find us on the map</p>
        </div>

        <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-border shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.1195488079147!2d73.06380677433329!3d33.49826664678095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df8d7973f4ed4b%3A0x1ea451dce886ad6!2sMahria%20Construction%20and%20Real%20Estate!5e0!3m2!1sen!2s!4v1762509372697!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}
