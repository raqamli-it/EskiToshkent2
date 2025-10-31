import moment from "moment-hijri";

function DateSwitcher() {
  const hijriMonths = [
    "muharram",
    "safar",
    "rabiul avval",
    "raius soniy",
    "jumodul avval",
    "jumodus soniy",
    "rajab",
    "sha'bon",
    "ramazon",
    "shavvol",
    "zulqa'da",
    "zulhijja",
  ];

  moment.updateLocale("uz", {
    months:
      "yanvar_fevral_mart_aprel_may_iyun_iyul_avgust_sentyabr_oktabr_noyabr_dekabr".split(
        "_"
      ),
  });

  moment.locale("uz");

  const monthIndex = moment().iMonth(); // Hijriy oy indeksi olish
  const hijriMonth = hijriMonths[monthIndex]; // O'zgaruvchiga Lotin oy nomini olish
  return (
    <div className="flex bg-white h-full items-center gap-3 text-[19px] px-5 rounded-[16px] md:bg-transparent md:text-white md:w-full md:px-0 md:mt-3 md:flex-wrap">
      <div className="xl:text-[17px] lg:text-[15px] md:text-[17px]">
        <span>{moment().format("YYYY")}</span>
        <span>- yil</span>
      </div>

      <div className="xl:text-[17px] lg:text-[15px] md:text-[17px]">
        <span>{moment().format("D-MMMM", { locale: "uz" })}</span>
      </div>

      {/* Hijriy data */}
      <div className="xl:text-[17px] lg:text-[15px] md:text-[17px]">
        <span>{moment().format("iYYYY")}</span>
        <span>- yil</span>
      </div>

      <div className="xl:text-[17px] lg:text-[15px] md:text-[17px]">
        <span>
          {moment().format("iDD").startsWith("0")
            ? moment().format("iDD").slice(1)
            : moment().format("iDD")}
        </span>

        <span>- {hijriMonth}</span>
      </div>
    </div>
  );
}

export default DateSwitcher;
