
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Mic, 
  FileText, 
  Share2, 
  Users, 
  Globe, 
  Lock,
  ChevronLeft,
  Mail,
  Phone,
  ExternalLink
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[80vh] flex items-center justify-center px-4 py-20">
        <div className="container max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              מהיום, ההקלטות שלכם הופכות לטקסט ברור, נגיש ומדויק – בלחיצת כפתור!
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              TextU – מדיבור לכתב בצורה חכמה, מדויקת ויעילה.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              התחילו עכשיו – חודש ניסיון חינם!
              <ChevronLeft className="mr-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">מה זה TextU?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              TextU היא מערכת חכמה להמרת הקלטות לטקסט, המאפשרת לכם לתמלל, לערוך ולייצר דוחות מסודרים בלחיצת כפתור. בעזרת טכנולוגיה מתקדמת, אנו הופכים את השיחה שלכם למסמך ברור ומסודר – בלי מאמץ!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mic className="h-8 w-8" />,
                title: "המרת קול לטקסט",
                description: "העלו הקלטות וקבלו תמלול מהיר ומדויק"
              },
              {
                icon: <FileText className="h-8 w-8" />,
                title: "עריכת דוחות חכמה",
                description: "יצירת דוחות מקצועיים עם מבנה מסודר"
              },
              {
                icon: <Share2 className="h-8 w-8" />,
                title: "שיתוף וניהול קל",
                description: "הורדה ושיתוף של הטקסטים בפורמטים שונים"
              }
            ].map((feature, index) => (
              <Card key={index} className="feature-card text-center p-6">
                <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary py-20 px-4">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16">כל מה שאתם צריכים במקום אחד!</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Mic />,
                title: "המרת קול לטקסט",
                description: "העלאת הקלטות מכל מכשיר וקבלת תמלול תוך דקות"
              },
              {
                icon: <FileText />,
                title: "עריכת דוחות חכמים",
                description: "סידור הטקסט בצורה ברורה עם פסקאות, כותרות וסיכומים"
              },
              {
                icon: <Share2 />,
                title: "שיתוף וייצוא מהיר",
                description: "הורדה ושיתוף דוחות בקלות"
              },
              {
                icon: <Users />,
                title: "זיהוי דוברים אוטומטי",
                description: "מערכת מתקדמת שמפרידה בין המשתתפים בשיחה"
              },
              {
                icon: <Globe />,
                title: "תמיכה בשפות שונות",
                description: "תמלול מהיר ואמין במספר שפות"
              },
              {
                icon: <Lock />,
                title: "אבטחה ברמה הגבוהה ביותר",
                description: "כל הנתונים שלכם נשמרים בבטחה"
              }
            ].map((feature, index) => (
              <Card key={index} className="feature-card">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16">TextU – מתאים בדיוק בשבילכם!</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "מנהלים ואנשי עסקים",
              "עיתונאים ויוצרים",
              "רופאים ואנשי מקצועות הבריאות",
              "עורכי דין ואנשי משפט",
              "סטודנטים ומרצים",
              "מטפלים",
              "בעלי שירות לקוחות ומכירות",
              "חוקרים ואנשי אקדמיה"
            ].map((audience, index) => (
              <Card key={index} className="p-4 text-center hover:bg-secondary/50 transition-colors">
                <p className="font-medium">{audience}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-20 px-4">
        <div className="container max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6">תנו ל-TextU לעבוד בשבילכם!</h2>
          <p className="text-xl mb-8 opacity-90">
            אל תבזבזו זמן על תמלול ידני – נסו אותנו עכשיו ותגלו כמה זה קל!
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            התחילו עכשיו – חודש ניסיון חינם!
            <ChevronLeft className="mr-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12 px-4">
        <div className="container max-w-6xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">יש לכם שאלות? דברו איתנו!</h3>
            <div className="flex justify-center gap-8 mb-8">
              <a href="tel:+972123456789" className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-5 w-5" />
                <span>072-123456789</span>
              </a>
              <a href="mailto:contact@textu.com" className="flex items-center gap-2 hover:text-primary">
                <Mail className="h-5 w-5" />
                <span>contact@textu.com</span>
              </a>
              <a href="https://textu.com" className="flex items-center gap-2 hover:text-primary">
                <ExternalLink className="h-5 w-5" />
                <span>textu.com</span>
              </a>
            </div>
            <p className="text-muted-foreground">© 2024 TextU. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
