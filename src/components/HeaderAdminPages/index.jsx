const HeaderAdminPages = ({ title, description }) => {
  return (
    <header className="border-b border-border p-6">
      <h1 className="text-3xl font-bold text-foreground">{title}</h1>
      <p className="text-muted-foreground mt-2">{description}</p>
    </header>
  );
};

export default HeaderAdminPages;
