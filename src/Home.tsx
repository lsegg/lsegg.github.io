export const HomeScr: any = () => {
  const siteInConstruction = false;
  return (
    <div className="HomeScreen">
      {siteInConstruction && <SiteInConstructionSection />}
      {!siteInConstruction && <></>}
    </div>
  );
};
