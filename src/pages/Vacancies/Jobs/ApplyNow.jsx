export default function ApplyNow() {
  const onButtonClick = () => {
    const pdfUrl = "Dds_Application_form.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <button onClick={onButtonClick} className="apply-button">Apply Now</button>
    </>
  )
}
