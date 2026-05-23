import { GraduationCap, MessageCircle, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-base">考证通</span>
            </div>
            <p className="text-sm leading-relaxed">
              收录热门国内证书信息，帮助你找到最适合的考证路线。数据仅供参考，以官方公告为准。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">快速导航</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">首页</a></li>
              <li><a href="/search" className="hover:text-white transition-colors">证书搜索</a></li>
              <li><a href="/match" className="hover:text-white transition-colors">智能匹配</a></li>
              <li><a href="/compare" className="hover:text-white transition-colors">证书对比</a></li>
            </ul>
          </div>

          {/* Contact / WeChat */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3 flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4" /> 联系方式
            </h3>
            <div className="space-y-3">
              {/* WeChat QR */}
              <div className="bg-white rounded-lg p-2 inline-block">
                <img
                  src="/wechat-qr.jpg"
                  alt="微信二维码"
                  className="w-28 h-28 object-contain rounded"
                />
              </div>
              <p className="text-xs text-slate-500">扫码添加微信咨询</p>
              
              {/* Phone number from the second image */}
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300">微信号：请扫描上方二维码</span>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">免责声明</h3>
            <p className="text-sm leading-relaxed">
              本平台所有信息均来自公开资料，仅供参考。报考条件、考试时间、费用等具体信息请以官方发布的最新通知为准。
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-xs">
          <p>© {new Date().getFullYear()} 考证通 · 仅供学习参考 · 数据如有出入请联系官方确认</p>
        </div>
      </div>
    </footer>
  );
}
