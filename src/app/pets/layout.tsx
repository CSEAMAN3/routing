export default function PetsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-teal-500 border-8">
      <p>I am a layout wrapping everything under the /pets route</p>
      {children}
    </div>
  );
}
